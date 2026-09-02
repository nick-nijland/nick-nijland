import type { jsPDF } from 'jspdf';

import { jobs, Job } from './experience.data';
import { categories } from './tech-stack.data';
import { personal } from './personal.data';
import { formatMonthYear } from './format-date';

/** Translator: resolves an i18n key to a string in the active language. */
export type Translator = (key: string) => string;

// A4 portrait, millimetres.
const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN_X = 18;
const MARGIN_TOP = 18;
const MARGIN_BOTTOM = 16;
const CONTENT_W = PAGE_W - MARGIN_X * 2;

const INK: [number, number, number] = [26, 26, 26];
const MUTED: [number, number, number] = [102, 102, 102];
const ACCENT: [number, number, number] = [47, 111, 79];
const RULE: [number, number, number] = [214, 214, 214];

/**
 * Renders the CV onto the given jsPDF document. Framework-free so it can be
 * exercised by both the Angular service and an offline render test.
 */
export function buildCvDocument(doc: jsPDF, t: Translator, lang: string): void {
  let y = MARGIN_TOP;

  const ensureSpace = (needed: number) => {
    if (y + needed > PAGE_H - MARGIN_BOTTOM) {
      doc.addPage();
      y = MARGIN_TOP;
    }
  };

  const writeWrapped = (
    text: string,
    opts: {
      size: number;
      color: [number, number, number];
      font?: 'normal' | 'italic' | 'bold';
      lineH?: number;
      indent?: number;
    },
  ) => {
    const { size, color, font = 'normal', lineH = size * 0.42 + 1.4, indent = 0 } = opts;
    doc.setFont('helvetica', font);
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const lines: string[] = doc.splitTextToSize(text, CONTENT_W - indent);
    for (const line of lines) {
      ensureSpace(lineH);
      doc.text(line, MARGIN_X + indent, y);
      y += lineH;
    }
  };

  const sectionTitle = (label: string) => {
    y += 4;
    ensureSpace(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...ACCENT);
    doc.text(label.toUpperCase(), MARGIN_X, y);
    y += 2.5;
    doc.setDrawColor(...RULE);
    doc.setLineWidth(0.3);
    doc.line(MARGIN_X, y, MARGIN_X + CONTENT_W, y);
    y += 5;
  };

  // ---- Header ---------------------------------------------------------------
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...INK);
  doc.text(personal.name, MARGIN_X, y);
  y += 7.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(...MUTED);
  doc.text(t(personal.roleKey), MARGIN_X, y);
  y += 6;

  doc.setFontSize(9);
  doc.setTextColor(...MUTED);
  const contactLine = [personal.email, personal.phone, personal.city].filter(Boolean).join('   ·   ');
  doc.text(contactLine, MARGIN_X, y);
  y += 4.6;
  doc.setTextColor(...ACCENT);
  doc.textWithLink(personal.linkedinLabel, MARGIN_X, y, { url: personal.linkedin });
  y += 4;

  doc.setDrawColor(...RULE);
  doc.setLineWidth(0.3);
  doc.line(MARGIN_X, y, MARGIN_X + CONTENT_W, y);
  y += 2;

  // ---- Experience --------------------------------------------------------
  sectionTitle(t('experience.label'));

  const dateRange = (job: Job) => {
    const from = formatMonthYear(job.from, lang);
    const to = job.to === 'present' ? t('experience.present') : formatMonthYear(job.to, lang);
    return `${from} — ${to}`;
  };

  for (const job of jobs) {
    ensureSpace(16);
    y += 1;

    // Role (left) + date range (right) on the same baseline.
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(...INK);
    doc.text(job.role, MARGIN_X, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...MUTED);
    doc.text(dateRange(job), MARGIN_X + CONTENT_W, y, { align: 'right' });
    y += 4.6;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9.5);
    doc.setTextColor(...MUTED);
    doc.text(`@ ${job.company}`, MARGIN_X, y);
    y += 4.8;

    if (job.description) {
      const resolved = t(job.description);
      if (resolved && resolved !== job.description) {
        writeWrapped(resolved, { size: 9.5, color: INK, lineH: 4.5 });
      }
    }

    for (const bullet of job.bullets) {
      writeWrapped(`•  ${bullet}`, { size: 9.5, color: INK, lineH: 4.5, indent: 3 });
    }

    if (job.tags.length) {
      y += 0.6;
      writeWrapped(job.tags.join('  ·  '), { size: 8.5, color: MUTED, lineH: 4 });
    }

    y += 3.4;
  }

  // ---- Tech stack ---------------------------------------------------------
  sectionTitle(t('stack.label'));

  for (const category of categories) {
    ensureSpace(10);
    const label = `${t(category.name)}:  `;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...INK);
    const labelW = doc.getTextWidth(label);
    doc.text(label, MARGIN_X, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...MUTED);
    const skillLines: string[] = doc.splitTextToSize(category.skills.join(', '), CONTENT_W - labelW);
    skillLines.forEach((line, i) => {
      if (i > 0) {
        ensureSpace(4.4);
        y += 4.4;
      }
      doc.text(line, MARGIN_X + labelW, y);
    });
    y += 5.4;
  }

  // ---- Footer (page numbers when multi-page) ------------------------------
  const pageCount = doc.getNumberOfPages();
  if (pageCount > 1) {
    for (let p = 1; p <= pageCount; p++) {
      doc.setPage(p);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(...MUTED);
      doc.text(`${p} / ${pageCount}`, MARGIN_X + CONTENT_W, PAGE_H - 10, { align: 'right' });
      doc.text('nicknijland.dev', MARGIN_X, PAGE_H - 10);
    }
  }
}

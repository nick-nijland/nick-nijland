/** Formats a 'YYYY-MM' string as a localized "MMM yyyy" label. */
export function formatMonthYear(value: string, lang: string): string {
  const [year, month] = value.split('-').map(Number);
  const date = new Date(year, month - 1, 1);
  const locale = lang === 'nl' ? 'nl-NL' : 'en-US';
  return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(date);
}

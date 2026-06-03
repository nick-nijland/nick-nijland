import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { ContactDto } from './contact.dto';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  private transporter: nodemailer.Transporter;

  constructor(private config: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.config.getOrThrow('SMTP_HOST'),
      port: this.config.get<number>('SMTP_PORT', 587),
      secure: this.config.get('SMTP_SECURE') === 'true',
      auth: {
        user: this.config.getOrThrow('SMTP_USER'),
        pass: this.config.getOrThrow('SMTP_PASS'),
      },
    });
  }

  async send(dto: ContactDto): Promise<void> {
    const to = this.config.getOrThrow('CONTACT_RECEIVER_EMAIL');

    try {
      await this.transporter.sendMail({
        from: `"Portfolio Contact" <${this.config.getOrThrow('SMTP_FROM_EMAIL')}>`,
        to,
        replyTo: dto.email,
        subject: `nicknijland.nl | Nieuw bericht van ${dto.name}`,
        text: this.buildText(dto),
        html: this.buildHtml(dto),
      });
    } catch (err) {
      this.logger.error('Failed to send contact email', err);
      throw new InternalServerErrorException('Failed to send message');
    }
  }

  private buildText(dto: ContactDto): string {
    return [
      `Name:    ${dto.name}`,
      `Phone:   ${dto.phone}`,
      `Email:   ${dto.email}`,
      `Message:\n${dto.message}`,
    ].join('\n');
  }

  private buildHtml(dto: ContactDto): string {
    const escape = (s: string) =>
      s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
      <p><strong>Name:</strong> ${escape(dto.name)}</p>
      <p><strong>Phone:</strong> ${escape(dto.phone)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escape(dto.email)}">${escape(dto.email)}</a></p>
      <p><strong>Message:</strong></p>
      <p>${escape(dto.message).replace(/\n/g, '<br>')}</p>
    `;
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { ContactDto } from './contact.dto';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @Throttle({ default: { limit: 3, ttl: 60000 } }) // 3 requests per minute per IP
  async send(@Body() dto: ContactDto): Promise<{ success: boolean }> {
    await this.contactService.send(dto);
    return { success: true };
  }
}

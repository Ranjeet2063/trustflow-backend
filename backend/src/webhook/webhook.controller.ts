import { Controller, Post, Delete, Body, Param } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhooks')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post()
  register(@Body() body: { id: string; url: string }) {
    this.webhookService.register(body.id, body.url);
    return { registered: true, id: body.id };
  }

  @Delete(':id')
  unregister(@Param('id') id: string) {
    this.webhookService.unregister(id);
    return { unregistered: true };
  }
}

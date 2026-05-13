import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EscrowService } from './escrow.service';

interface CreateEscrowDto { depositor: string; beneficiary: string; amountXLM: string; }

@Controller('escrows')
export class EscrowController {
  constructor(private readonly escrowService: EscrowService) {}

  @Post()
  create(@Body() dto: CreateEscrowDto) {
    return this.escrowService.create(dto.depositor, dto.beneficiary, dto.amountXLM);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.escrowService.findById(id);
  }

  @Get('depositor/:address')
  findByDepositor(@Param('address') address: string) {
    return this.escrowService.findByDepositor(address);
  }

  @Post(':id/release')
  release(@Param('id') id: string) {
    return this.escrowService.release(id);
  }
}

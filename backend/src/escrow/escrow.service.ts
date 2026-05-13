import { Injectable } from '@nestjs/common';

export interface Escrow {
  id: string;
  depositor: string;
  beneficiary: string;
  amountXLM: string;
  status: 'pending' | 'active' | 'released' | 'disputed';
  createdAt: string;
}

@Injectable()
export class EscrowService {
  private escrows: Map<string, Escrow> = new Map();

  async create(depositor: string, beneficiary: string, amountXLM: string): Promise<Escrow> {
    const id = `esc-${Date.now()}`;
    const escrow: Escrow = { id, depositor, beneficiary, amountXLM, status: 'pending', createdAt: new Date().toISOString() };
    this.escrows.set(id, escrow);
    return escrow;
  }

  async findById(id: string): Promise<Escrow | undefined> {
    return this.escrows.get(id);
  }

  async findByDepositor(address: string): Promise<Escrow[]> {
    return [...this.escrows.values()].filter(e => e.depositor === address);
  }

  async release(id: string): Promise<Escrow> {
    const escrow = this.escrows.get(id);
    if (!escrow) throw new Error('Escrow not found');
    escrow.status = 'released';
    return escrow;
  }
}

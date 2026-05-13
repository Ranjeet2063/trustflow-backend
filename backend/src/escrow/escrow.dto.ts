import { z } from 'zod';

export const CreateEscrowSchema = z.object({
  depositor: z.string().regex(/^G[A-Z2-7]{55}$/, 'Invalid Stellar address'),
  beneficiary: z.string().regex(/^G[A-Z2-7]{55}$/, 'Invalid Stellar address'),
  amountXLM: z.string().regex(/^\d+(\.\d{1,7})?$/, 'Invalid XLM amount'),
  deadlineBlocks: z.number().int().positive().optional(),
});

export type CreateEscrowDto = z.infer<typeof CreateEscrowSchema>;

export const ReleaseEscrowSchema = z.object({
  escrowId: z.string().min(1),
  signerAddress: z.string().regex(/^G[A-Z2-7]{55}$/),
});

export type ReleaseEscrowDto = z.infer<typeof ReleaseEscrowSchema>;

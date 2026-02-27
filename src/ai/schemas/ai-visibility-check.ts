import { z } from 'zod';

export const AIVisibilityInputSchema = z.object({
  url: z.string().url().describe('The website URL to analyze.'),
});
export type AIVisibilityInput = z.infer<typeof AIVisibilityInputSchema>;

export const AIVisibilityOutputSchema = z.object({
  score: z
    .number()
    .min(0)
    .max(100)
    .describe('A score from 0-100 indicating AI visibility.'),
  summary: z
    .string()
    .describe('A short summary of the AI visibility analysis.'),
  recommendation: z
    .string()
    .describe('A key recommendation to improve visibility.'),
});
export type AIVisibilityOutput = z.infer<typeof AIVisibilityOutputSchema>;

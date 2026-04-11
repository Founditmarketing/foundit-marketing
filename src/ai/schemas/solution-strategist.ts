import { z } from 'zod';

export const SolutionStrategyInputSchema = z.object({
  businessName: z.string().describe('The name of the business.'),
  website: z.string().url('Please enter a valid URL.').describe('The business website URL.'),
  industry: z.string().describe('The industry the business operates in.'),
  revenue: z.string().describe('The annual revenue of the business.'),
  targetAudience: z
    .string()
    .describe('A description of the ideal customer or target audience.'),
  challenges: z
    .array(z.string())
    .min(1, 'Please select at least one challenge.')
    .describe('The primary marketing challenges the business is facing.'),
});
export type SolutionStrategyInput = z.infer<typeof SolutionStrategyInputSchema>;

export const SolutionStrategyOutputSchema = z.object({
  executiveSummary: z
    .string()
    .describe(
      'A high-level, concise summary of the proposed marketing strategy.'
    ),
  keyInitiatives: z
    .array(
      z.object({
        title: z.string().describe('The title of the key initiative.'),
        description: z
          .string()
          .describe('A detailed description of the initiative and its goals.'),
      })
    )
    .describe(
      'A list of 2-3 specific, actionable marketing initiatives to undertake.'
    ),
  recommendedBudgets: z
    .object({
      googleAds: z.object({
        monthlyBudget: z
          .string()
          .describe(
            'The recommended monthly budget for Google Ads (e.g., "$1,500 - $3,000").'
          ),
        justification: z
          .string()
          .describe(
            'The reasoning behind the recommended Google Ads budget.'
          ),
      }),
      localServicesAds: z.object({
        monthlyBudget: z
          .string()
          .describe(
            'The recommended monthly budget for Google Local Services Ads (e.g., "$500 - $1,000"). Provide "N/A" if not applicable to the business type.'
          ),
        justification: z
          .string()
          .describe(
            'The reasoning behind the GLS budget, or why it is not applicable.'
          ),
      }),
    })
    .describe('Recommended monthly advertising budgets.'),
});
export type SolutionStrategyOutput = z.infer<
  typeof SolutionStrategyOutputSchema
>;

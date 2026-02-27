import { z } from 'zod';

export const FeasibilityStudyInputSchema = z.object({
  businessConcept: z.string().min(20, 'Please provide a more detailed description (at least 20 characters).').describe('A clear and concise description of the business idea or concept.'),
  targetMarket: z.string().min(20, 'Please provide a more detailed description (at least 20 characters).').describe('A description of the target audience or customer segment.'),
  uniqueSellingProposition: z.string().min(20, 'Please provide a more detailed description (at least 20 characters).').describe('What makes this business unique compared to competitors?'),
});
export type FeasibilityStudyInput = z.infer<typeof FeasibilityStudyInputSchema>;

export const FeasibilityStudyOutputSchema = z.object({
  feasibilityScore: z.number().min(0).max(100).describe('A score from 0-100 indicating the viability of the business concept.'),
  marketAnalysis: z.string().describe('A summary of the target market, including potential size and competition.'),
  potentialChallenges: z.array(z.string()).describe('A list of potential challenges and risks for the business.'),
  strategicRecommendations: z.array(z.string()).describe('A list of actionable next steps or strategic recommendations.'),
  executiveSummary: z.string().describe('A high-level summary of the entire feasibility study.'),
});
export type FeasibilityStudyOutput = z.infer<typeof FeasibilityStudyOutputSchema>;

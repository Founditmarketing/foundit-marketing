'use server';
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

// This file configures the Genkit instance for use in server-side flows.

export const ai = genkit({
  plugins: [
    googleAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY }),
  ],
});

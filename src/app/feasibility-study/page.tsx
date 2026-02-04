import { Metadata } from 'next';
import FeasibilityStudyPage from './client';

export const metadata: Metadata = {
  title: 'AI Feasibility Study | Stress Test Your Strategy',
  description: "Don't guess. Let our Gemini-powered strategist analyze your business concept and uncover potential blind spots before you invest.",
};

export default function Page() {
  return <FeasibilityStudyPage />;
}

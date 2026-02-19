import { Metadata } from 'next';
import SolutionsPage from './client';

export const metadata: Metadata = {
  title: 'AI Solutions & Growth Architecture | Found It Marketing',
  description: "Get a custom growth architecture generated in seconds. Our AI strategist builds data-backed blueprints for scaling your business.",
};

export default function Page() {
  return <SolutionsPage />;
}

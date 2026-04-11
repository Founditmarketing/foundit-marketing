import { Metadata } from 'next';
import WebDevelopmentPage from './client';

export const metadata: Metadata = {
  title: 'Website Development | Stunning Digital Experiences',
  description: "Explore our latest digital masterpieces. From high-converting landing pages to extensive national dealership platforms.",
};

export default function Page() {
  return <WebDevelopmentPage />;
}

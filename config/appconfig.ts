import { Metadata } from 'next';

const TITLE = 'Vora AI - AI Digital Workers for Hiring Teams';
const DESCRIPTION =
  'Our AI recruiter Rachel screens your inbound applications, shortlists candidates and conducts phone screens so you can focus on closing the top candidates.';

const BASE_URL = process.env.BASE_URL!;

export const siteConfig: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: '/favicon.ico',
  },
  applicationName: 'Vora AI',
  creator: 'Praashh',

  category: 'AU',
  alternates: {
    canonical: BASE_URL,
  },
  keywords: [
    'AI',
    'Vora AI',
    'Hiring',
    'Hiring Teams',
    'Digital Workers',
    'YC',
    'Dev',
  ],
  metadataBase: new URL(BASE_URL),
};
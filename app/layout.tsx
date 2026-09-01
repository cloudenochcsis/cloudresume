import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Enoch Ayivor | Senior DevOps Engineer — AWS, Kubernetes & GitOps',
  description:
    'Senior DevOps Engineer specializing in AWS cloud infrastructure, Kubernetes platforms, modular Terraform, and declarative GitOps delivery pipelines.',
  metadataBase: new URL('https://cloudenoch.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Enoch Ayivor | Senior DevOps Engineer',
    description:
      'Senior DevOps Engineer specializing in AWS cloud infrastructure, Kubernetes platforms, modular Terraform, and declarative GitOps delivery pipelines.',
    url: 'https://cloudenoch.com',
    siteName: 'Cloud Enoch',
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enoch Ayivor | Senior DevOps Engineer',
    description:
      'Senior DevOps Engineer specializing in AWS cloud infrastructure, Kubernetes platforms, modular Terraform, and declarative GitOps delivery pipelines.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-terminal-950 text-slate-100 flex flex-col selection:bg-electric-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

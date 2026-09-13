import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Enoch Ayivor | Cloud & DevOps Engineer',
  description:
    'Cloud & DevOps Engineer specializing in AWS cloud infrastructure, Kubernetes platforms, modular Terraform, and declarative GitOps delivery pipelines.',
  metadataBase: new URL('https://cloudenochcsis.github.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Enoch Ayivor | Cloud & DevOps Engineer',
    description:
      'Cloud & DevOps Engineer specializing in AWS cloud infrastructure, Kubernetes platforms, modular Terraform, and declarative GitOps delivery pipelines.',
    url: 'https://cloudenochcsis.github.io',
    siteName: 'Enoch Ayivor Portfolio',
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enoch Ayivor | Cloud & DevOps Engineer',
    description:
      'Cloud & DevOps Engineer specializing in AWS cloud infrastructure, Kubernetes platforms, modular Terraform, and declarative GitOps delivery pipelines.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-neutral-800 selection:bg-neutral-900 selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}

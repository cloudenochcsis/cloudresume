# Portfolio Enhancement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the portfolio's content for recruiters — hero email CTA, trust-loaded About, featured case study + project grid, dedicated contact section — and delete dead/fabricated code.

**Architecture:** Content-first polish of the existing React (CRA) + Tailwind single page. Keep the dark glass-card visual system. Split `Main.tsx` into focused components (`About`, `Projects`, `Contact`) sharing an extracted `useReveal` hook. All content stays as typed constants co-located with components (existing pattern). No backend changes.

**Tech Stack:** React 18 (CRA), TypeScript, Tailwind CSS, Jest + React Testing Library.

**Spec:** `docs/superpowers/specs/2026-07-05-portfolio-enhancement-design.md`

## Global Constraints

- No new dependencies. `lucide-react` gets REMOVED (only dead components import it).
- Working directory: `/Users/akpadetsi/2026 Projects/cloudresume`. Test command: `yarn test` (runs `react-scripts test --watchAll=false --coverage --ci --testEnvironment=jsdom`). Single-file: `yarn test -- --testPathPattern=<name>`.
- Contact email everywhere: `cloudenochcsis@gmail.com`. Mailto href exactly: `mailto:cloudenochcsis@gmail.com?subject=Opportunity%20for%20Enoch`
- Verified external links — copy verbatim, never invent others:
  - AWS cert: `https://www.credly.com/badges/193050a7-1625-4d8e-b77d-26d2fe8dd1e2/linked_in_profile`
  - Terraform cert: `https://www.credly.com/badges/59645601-fc1c-42a8-b95b-4fbf3c499ef6/linked_in_profile`
  - Azure Admin cert: `https://learn.microsoft.com/en-us/users/enochayivor-0815/credentials/f46a46b56d4133fb`
  - OpenSRE merged PRs: `https://github.com/Tracer-Cloud/opensre/pulls?q=is%3Apr+is%3Amerged+author%3Acloudenochcsis`
- CKA and Azure DevOps Engineer Expert certs: OMIT entirely (no verify links yet). No unverifiable claims anywhere.
- Resume button gated by `RESUME_AVAILABLE = false` constant; headshot gated by `HEADSHOT_SRC: string | null = null`. Neither may render a broken link/image.
- Commit messages: conventional style (`feat:`, `test:`, `refactor:`). Do NOT add any Co-Authored-By trailer.
- Existing CSS utility classes to reuse: `glass-card`, `gradient-text`, `glow-blue-hover`, `reveal`/`visible`, `stagger-children`, `skill-tag`. Accent colors: `#0da6f2` (blue), `#a855f7` (purple).

---

### Task 1: Hero dual CTA (Header.tsx)

**Files:**
- Modify: `src/components/Header.tsx:115-123` (the single CTA anchor)
- Test: `src/components/__tests__/Header.test.tsx`

**Interfaces:**
- Consumes: nothing new.
- Produces: hero mailto CTA with href `mailto:cloudenochcsis@gmail.com?subject=Opportunity%20for%20Enoch` (Task 5's Contact section reuses the same href string, defined independently there).

- [ ] **Step 1: Write the failing test**

Add to the existing `describe('Header', ...)` block in `src/components/__tests__/Header.test.tsx`:

```tsx
  it('offers a direct email CTA and a work anchor in the hero', () => {
    renderHeader();

    const emailCta = screen.getByRole('link', { name: /get in touch/i });
    expect(emailCta).toHaveAttribute(
      'href',
      'mailto:cloudenochcsis@gmail.com?subject=Opportunity%20for%20Enoch'
    );
    expect(screen.getByRole('link', { name: /view work/i })).toHaveAttribute('href', '#projects');
  });
```

- [ ] **Step 2: Run test to verify it fails**

Run: `yarn test -- --testPathPattern=Header`
Expected: FAIL — `Unable to find an accessible element with the role "link" and name /get in touch/i`

- [ ] **Step 3: Replace the single hero CTA with two buttons**

In `src/components/Header.tsx`, replace the entire `<a className="relative mt-10 ...">...</a>` block (currently lines 115–123, the "View My Work" anchor) with:

```tsx
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            className="flex items-center gap-2 cursor-pointer justify-center rounded-xl h-12 px-8 bg-[#0da6f2] text-white text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#0a8cd1] hover:scale-[1.03] hover:shadow-lg hover:shadow-[#0da6f2]/20 pulse-ring"
            href="mailto:cloudenochcsis@gmail.com?subject=Opportunity%20for%20Enoch"
          >
            <span>Get in touch</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a
            className="flex items-center gap-2 cursor-pointer justify-center rounded-xl h-12 px-8 glass-card text-gray-300 text-sm font-semibold tracking-wide transition-all duration-300 hover:text-white hover:border-[#0da6f2]/30 hover:scale-[1.03]"
            href="#projects"
          >
            <span>View work</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `yarn test -- --testPathPattern=Header`
Expected: PASS (both tests in the file)

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.tsx src/components/__tests__/Header.test.tsx
git commit -m "feat: hero dual CTA - direct email primary, view-work secondary"
```

---

### Task 2: useReveal hook + About trust section

**Files:**
- Create: `src/hooks/useReveal.ts`
- Create: `src/components/About.tsx`
- Modify: `src/components/Main.tsx` (replace About block with `<About />`, import hook from new location)
- Test: `src/components/__tests__/About.test.tsx`

**Interfaces:**
- Consumes: nothing from other tasks.
- Produces:
  - `useReveal(): { ref: React.RefObject<HTMLDivElement>, visible: boolean }` exported from `src/hooks/useReveal.ts` — Task 3 imports it.
  - `About: React.FC` (no props), default export of `src/components/About.tsx`, renders `id="about"`.

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/About.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About', () => {
  beforeEach(() => {
    window.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
      observe: jest.fn(() => callback([{ isIntersecting: true }])),
      disconnect: jest.fn(),
    }));
  });

  it('links every certification to its verification page', () => {
    render(<About />);

    expect(screen.getByRole('link', { name: /solutions architect/i })).toHaveAttribute(
      'href',
      'https://www.credly.com/badges/193050a7-1625-4d8e-b77d-26d2fe8dd1e2/linked_in_profile'
    );
    expect(screen.getByRole('link', { name: /terraform/i })).toHaveAttribute(
      'href',
      'https://www.credly.com/badges/59645601-fc1c-42a8-b95b-4fbf3c499ef6/linked_in_profile'
    );
    expect(screen.getByRole('link', { name: /azure administrator/i })).toHaveAttribute(
      'href',
      'https://learn.microsoft.com/en-us/users/enochayivor-0815/credentials/f46a46b56d4133fb'
    );
  });

  it('shows only verifiable trust signals', () => {
    render(<About />);

    expect(screen.getByRole('link', { name: /merged pull requests/i })).toHaveAttribute(
      'href',
      'https://github.com/Tracer-Cloud/opensre/pulls?q=is%3Apr+is%3Amerged+author%3Acloudenochcsis'
    );
    // CKA / Azure DevOps Expert have no verify links -> must not render
    expect(screen.queryByText(/kubernetes administrator/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/devops engineer expert/i)).not.toBeInTheDocument();
    // no headshot file yet -> no img element
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `yarn test -- --testPathPattern=About`
Expected: FAIL — `Cannot find module '../About'`

- [ ] **Step 3: Create the hook**

Create `src/hooks/useReveal.ts` (this is the exact code currently inlined in `Main.tsx:68-82`, moved verbatim):

```ts
import { useRef, useEffect, useState } from 'react';

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}
```

- [ ] **Step 4: Create About.tsx**

Create `src/components/About.tsx`:

```tsx
import React from 'react';
import { useReveal } from '../hooks/useReveal';

// Set to '/headshot.jpg' after adding the image to public/. Null = text-only layout.
const HEADSHOT_SRC: string | null = null;

const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    href: 'https://www.credly.com/badges/193050a7-1625-4d8e-b77d-26d2fe8dd1e2/linked_in_profile',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    href: 'https://www.credly.com/badges/59645601-fc1c-42a8-b95b-4fbf3c499ef6/linked_in_profile',
  },
  {
    name: 'Microsoft Certified: Azure Administrator Associate',
    issuer: 'Microsoft',
    href: 'https://learn.microsoft.com/en-us/users/enochayivor-0815/credentials/f46a46b56d4133fb',
  },
];

const About: React.FC = () => {
  const reveal = useReveal();

  return (
    <div
      ref={reveal.ref}
      className={`reveal ${reveal.visible ? 'visible' : ''} scroll-mt-20 my-16 p-8 md:p-10 rounded-2xl glass-card glow-blue-hover transition-all duration-500`}
      id="about"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1 rounded-full bg-gradient-to-b from-[#0da6f2] to-[#a855f7]"></div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">About Me</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {HEADSHOT_SRC && (
          <img
            src={HEADSHOT_SRC}
            alt="Enoch, Cloud DevOps Engineer"
            className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border border-white/10 shrink-0"
          />
        )}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          I'm a Cloud DevOps engineer who builds the infrastructure teams ship on: Kubernetes
          platforms with GitOps delivery, Terraform-provisioned environments across AWS, Azure,
          and GCP, and the CI/CD and observability pipelines that keep deployments boring.
          Everything below is verifiable — certifications link to their issuers, and every
          project links to public code.
        </p>
      </div>

      {/* Trust rows */}
      <div className="mt-8 pt-8 border-t border-white/5 space-y-6">
        {/* Certifications */}
        <div>
          <h3 className="text-sm font-mono text-gray-500 mb-3">{'// certifications — click to verify'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-[#0da6f2]/30 transition-all duration-300 no-underline"
              >
                <div className="text-sm font-semibold text-gray-200 group-hover:text-[#0da6f2] transition-colors">
                  {cert.name}
                </div>
                <div className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
                  {cert.issuer}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Open source + GitHub */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://github.com/Tracer-Cloud/opensre/pulls?q=is%3Apr+is%3Amerged+author%3Acloudenochcsis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 p-4 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-[#0da6f2]/30 transition-all duration-300 no-underline"
          >
            <div className="text-sm font-semibold text-gray-200">Open source: 9 merged pull requests to OpenSRE</div>
            <div className="text-xs text-gray-500 mt-1">Bug fixes and tests merged upstream into Tracer-Cloud/opensre →</div>
          </a>
          <a
            href="https://github.com/cloudenochcsis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 p-4 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-[#0da6f2]/30 transition-all duration-300 no-underline"
          >
            <div className="text-sm font-semibold text-gray-200">Every project below is public</div>
            <div className="text-xs text-gray-500 mt-1">Don't take my word for it — read the code on GitHub →</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
```

- [ ] **Step 5: Wire About into Main.tsx**

In `src/components/Main.tsx`:

1. Add import at top: `import About from './About';`
2. Replace the import of hooks: change `import React, { useRef, useEffect, useState } from 'react';` to `import React from 'react';` and add `import { useReveal } from '../hooks/useReveal';`
3. Delete the inline `useReveal` function definition (lines 67–82, the `// Hook for section reveal animation` block).
4. Inside the component, delete the line `const about = useReveal();`
5. Replace the entire `{/* About Section */}` JSX block (the `<div ... id="about">...</div>` including quick stats, currently lines 91–118) with:

```tsx
      <About />
```

- [ ] **Step 6: Run tests to verify they pass**

Run: `yarn test -- --testPathPattern="About|Main"`
Expected: About tests PASS. Main test PASSES except possibly the `cloud infrastructure, DevOps, agentic AI, Python, and automation` assertion — that text now lives in About with new wording. If Main.test fails on it, update that assertion in `src/components/__tests__/Main.test.tsx` from:

```tsx
    expect(screen.getByText(/cloud infrastructure, DevOps, agentic AI, Python, and automation/i)).toBeInTheDocument();
```

to:

```tsx
    expect(screen.getByText(/Kubernetes platforms with GitOps delivery/i)).toBeInTheDocument();
```

Re-run until both files PASS.

- [ ] **Step 7: Commit**

```bash
git add src/hooks/useReveal.ts src/components/About.tsx src/components/Main.tsx src/components/__tests__/About.test.tsx src/components/__tests__/Main.test.tsx
git commit -m "feat: trust-first About section with verifiable certs and OSS proof"
```

---

### Task 3: Featured case study + project grid

**Files:**
- Create: `src/components/Projects.tsx`
- Modify: `src/components/Main.tsx` (replace Projects block with `<Projects />`)
- Test: `src/components/__tests__/Projects.test.tsx`
- Modify: `src/components/__tests__/Main.test.tsx` (drop stale project assertion)

**Interfaces:**
- Consumes: `useReveal` from `src/hooks/useReveal.ts` (Task 2).
- Produces: `Projects: React.FC` (no props), default export, renders `id="projects"` (hero "View work" CTA and nav link target).

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Projects.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react';
import Projects from '../Projects';

describe('Projects', () => {
  beforeEach(() => {
    window.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
      observe: jest.fn(() => callback([{ isIntersecting: true }])),
      disconnect: jest.fn(),
    }));
  });

  it('leads with the OpenTelemetry platform as a featured case study', () => {
    render(<Projects />);

    expect(screen.getByText(/OpenTelemetry DevOps Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/what this demonstrates/i)).toBeInTheDocument();
    // several cards use a "View code" link — the featured one renders first
    const codeLinks = screen.getAllByRole('link', { name: /view code/i });
    expect(codeLinks[0]).toHaveAttribute(
      'href',
      'https://github.com/cloudenochcsis/opentelemetry-devops-project'
    );
  });

  it('shows the multi-cloud 3-tier card with one link per cloud', () => {
    render(<Projects />);

    expect(screen.getByRole('link', { name: 'AWS' })).toHaveAttribute(
      'href',
      'https://github.com/cloudenochcsis/terraform-aws-3tier-architecture'
    );
    expect(screen.getByRole('link', { name: 'Azure' })).toHaveAttribute(
      'href',
      'https://github.com/cloudenochcsis/terraform-azure-3tier-architecture'
    );
    expect(screen.getByRole('link', { name: 'GCP' })).toHaveAttribute(
      'href',
      'https://github.com/cloudenochcsis/terraform-gcp-3tier-architecture'
    );
  });

  it('includes this site as a project and drops the profile-only card', () => {
    render(<Projects />);

    expect(screen.getByText(/This Site/i)).toBeInTheDocument();
    expect(screen.queryByText(/Agentic AI Automation Platform/i)).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `yarn test -- --testPathPattern=Projects`
Expected: FAIL — `Cannot find module '../Projects'`

- [ ] **Step 3: Create Projects.tsx**

Create `src/components/Projects.tsx`:

```tsx
import React from 'react';
import { useReveal } from '../hooks/useReveal';

const featured = {
  title: 'OpenTelemetry DevOps Platform',
  description:
    'A microservices system running on Kubernetes with a production-grade observability stack — built to deploy, break, and debug like a real production platform.',
  bullets: [
    'GitOps delivery with ArgoCD — cluster state is declared in git, never patched by hand',
    'Distributed tracing with OpenTelemetry across every service boundary',
    'Grafana dashboards and metrics pipelines for live system visibility',
    'Cluster and infrastructure provisioned with Terraform, manifests split into their own repo for clean GitOps',
  ],
  demonstrates:
    'Production-grade Kubernetes, GitOps workflow design, and end-to-end observability — the day-two skills, not just the deploy.',
  links: [
    { label: 'View code', href: 'https://github.com/cloudenochcsis/opentelemetry-devops-project' },
    { label: 'K8s manifests', href: 'https://github.com/cloudenochcsis/opentelemetry-k8s-manifests' },
    { label: 'Terraform', href: 'https://github.com/cloudenochcsis/opentelemetry-k8s-terraform' },
  ],
  tags: ['Kubernetes', 'ArgoCD', 'OpenTelemetry', 'Grafana', 'Terraform'],
};

const projects = [
  {
    title: 'Multi-Cloud 3-Tier Architecture',
    description:
      'The same production 3-tier pattern — network isolation, load balancing, auto scaling, managed databases — implemented natively on each major cloud with Terraform.',
    demonstrates: 'IaC depth that transfers across providers.',
    tags: ['Terraform', 'AWS', 'Azure', 'GCP'],
    gradient: 'from-orange-500/20 via-amber-500/20 to-yellow-500/20',
    icon: '🏛️',
    links: [
      { label: 'AWS', href: 'https://github.com/cloudenochcsis/terraform-aws-3tier-architecture' },
      { label: 'Azure', href: 'https://github.com/cloudenochcsis/terraform-azure-3tier-architecture' },
      { label: 'GCP', href: 'https://github.com/cloudenochcsis/terraform-gcp-3tier-architecture' },
    ],
  },
  {
    title: 'Terraform GitOps for AKS',
    description:
      'GitOps pipeline for Azure Kubernetes Service: Terraform provisions the cluster, ArgoCD reconciles application state from git — no manual kubectl in the deploy path.',
    demonstrates: 'Automated, auditable Kubernetes delivery on Azure.',
    tags: ['Terraform', 'Azure', 'AKS', 'ArgoCD'],
    gradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
    icon: '🏗️',
    links: [{ label: 'View code', href: 'https://github.com/cloudenochcsis/Terraform-GitOps-for-AKS' }],
  },
  {
    title: 'This Site',
    description:
      'React + FastAPI + MongoDB behind nginx, tested and shipped through a CircleCI pipeline with Docker. The portfolio is itself a DevOps artifact — deployed like production.',
    demonstrates: 'Full-stack delivery: code, pipeline, and infrastructure in one repo.',
    tags: ['React', 'FastAPI', 'CircleCI', 'Docker'],
    gradient: 'from-purple-500/20 via-violet-500/20 to-fuchsia-500/20',
    icon: '🔁',
    links: [{ label: 'View code', href: 'https://github.com/cloudenochcsis/cloudresume' }],
  },
];

const RepoLink: React.FC<{ label: string; href: string }> = ({ label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1.5 text-[#0da6f2] text-sm font-medium hover:gap-3 transition-all duration-300 no-underline"
  >
    <span>{label}</span>
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </a>
);

const Tag: React.FC<{ label: string }> = ({ label }) => (
  <span className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-gray-400 border border-white/[0.06] font-mono">
    {label}
  </span>
);

const Projects: React.FC = () => {
  const reveal = useReveal();

  return (
    <div ref={reveal.ref} className={`reveal ${reveal.visible ? 'visible' : ''} scroll-mt-20 my-16`} id="projects">
      <div className="flex items-center justify-center gap-3 mb-10">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white px-4">Projects</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
      </div>

      {/* Featured case study */}
      <div className="rounded-2xl glass-card overflow-hidden mb-6 transition-all duration-500 hover:border-[#0da6f2]/20">
        <div className="h-2 w-full bg-gradient-to-r from-emerald-500/60 via-teal-500/60 to-cyan-500/60"></div>
        <div className="p-8 md:p-10">
          <div className="text-xs font-mono text-[#0da6f2] mb-3">FEATURED</div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{featured.title}</h3>
          <p className="text-gray-400 leading-relaxed mb-6">{featured.description}</p>
          <ul className="space-y-2 mb-6">
            {featured.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm text-gray-400">
                <span className="text-[#0da6f2] mt-0.5">▸</span>
                {bullet}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-300 mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <span className="font-semibold text-white">What this demonstrates: </span>
            {featured.demonstrates}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {featured.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          <div className="flex flex-wrap gap-6">
            {featured.links.map((link) => (
              <RepoLink key={link.href} {...link} />
            ))}
          </div>
        </div>
      </div>

      {/* Project grid */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${reveal.visible ? 'stagger-children' : ''}`}>
        {projects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl glass-card transition-all duration-500 hover:border-[#0da6f2]/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0da6f2]/5"
          >
            <div className={`h-24 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
              <span className="text-4xl opacity-80 group-hover:scale-110 transition-transform duration-500">{project.icon}</span>
            </div>
            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-3 leading-relaxed">{project.description}</p>
              <p className="text-xs text-gray-400 flex-grow mb-4">
                <span className="font-semibold text-gray-300">Demonstrates: </span>
                {project.demonstrates}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              <div className="flex flex-wrap gap-5">
                {project.links.map((link) => (
                  <RepoLink key={link.href} {...link} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
```

- [ ] **Step 4: Wire Projects into Main.tsx and drop the old project data**

In `src/components/Main.tsx`:

1. Add import: `import Projects from './Projects';`
2. Delete the entire `const projects = [...]` array (the block starting `// Project data with gradient colors instead of external images`).
3. Delete the line `const projectsSection = useReveal();`
4. Replace the entire `{/* Projects Section */}` JSX block (`<div ... id="projects">...</div>`) with:

```tsx
      <Projects />
```

- [ ] **Step 5: Update the stale Main test assertion**

In `src/components/__tests__/Main.test.tsx`, the assertion `expect(screen.getByText(/Agentic AI Automation Platform/i)).toBeInTheDocument();` now fails (card intentionally dropped). Replace it with:

```tsx
    expect(screen.getByText(/OpenTelemetry DevOps Platform/i)).toBeInTheDocument();
```

- [ ] **Step 6: Run tests to verify they pass**

Run: `yarn test -- --testPathPattern="Projects|Main"`
Expected: PASS (all tests in both files)

- [ ] **Step 7: Commit**

```bash
git add src/components/Projects.tsx src/components/Main.tsx src/components/__tests__/Projects.test.tsx src/components/__tests__/Main.test.tsx
git commit -m "feat: featured OpenTelemetry case study plus outcome-led project grid"
```

---

### Task 4: Skills trim + Main props simplification

**Files:**
- Modify: `src/App.tsx` (competency list, Main props, remove dead type exports' usage)
- Modify: `src/components/Main.tsx` (props interface, skill icons)
- Modify: `src/App.test.tsx` (Main mock props)
- Test: existing `src/components/__tests__/Main.test.tsx`

**Interfaces:**
- Consumes: `About`, `Projects` from Tasks 2–3 (already wired).
- Produces: `Main: React.FC<{ coreCompetencies: CoreCompetency[] }>` — `skills` and `researchAreas` props are REMOVED. `CoreCompetency` type stays exported from `App.tsx`.

- [ ] **Step 1: Write the failing test**

In `src/components/__tests__/Main.test.tsx`, replace the whole file with:

```tsx
import { render, screen } from '@testing-library/react';
import Main from '../Main';
import { CoreCompetency } from '../../App';

const coreCompetencies: CoreCompetency[] = [
  { label: 'Terraform' },
  { label: 'Kubernetes' },
  { label: 'ArgoCD' },
];

describe('Main', () => {
  beforeEach(() => {
    window.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
      observe: jest.fn(() => callback([{ isIntersecting: true }])),
      disconnect: jest.fn(),
    }));
  });

  it('renders About, the skills chips, and Projects', () => {
    render(<Main coreCompetencies={coreCompetencies} />);

    expect(screen.getByText(/Kubernetes platforms with GitOps delivery/i)).toBeInTheDocument();
    // 'Terraform'/'ArgoCD' also appear as project tags, so use getAllByText
    expect(screen.getAllByText('Terraform').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('ArgoCD').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/OpenTelemetry DevOps Platform/i)).toBeInTheDocument();
    expect(screen.queryByText(/Agentic AI Automation Platform/i)).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `yarn test -- --testPathPattern=Main`
Expected: FAIL — TypeScript error: `Property 'skills' is missing` (Main still requires the old props)

- [ ] **Step 3: Simplify Main props and update skill icons**

In `src/components/Main.tsx`:

1. Change the import from App to: `import { CoreCompetency } from '../App';`
2. Replace the `MainProps` interface and component signature:

```tsx
interface MainProps {
  coreCompetencies: CoreCompetency[];
}

const Main: React.FC<MainProps> = ({ coreCompetencies }) => {
```

3. Replace the entire `skillIcons` map with:

```tsx
const skillIcons: Record<string, string> = {
  AWS: '☁️',
  Azure: '🌐',
  GCP: '🌩️',
  Terraform: '🏗️',
  Kubernetes: '☸️',
  ArgoCD: '🔄',
  Docker: '📦',
  'CI/CD': '🚀',
  Python: '🐍',
  OpenTelemetry: '📡',
  Grafana: '📊',
  'Agentic AI': '🤖',
};
```

- [ ] **Step 4: Trim the competency list and props in App.tsx**

In `src/App.tsx`:

1. Replace the `coreCompetencies` array with:

```tsx
const coreCompetencies: CoreCompetency[] = [
  { label: 'AWS' },
  { label: 'Azure' },
  { label: 'GCP' },
  { label: 'Terraform' },
  { label: 'Kubernetes' },
  { label: 'ArgoCD' },
  { label: 'Docker' },
  { label: 'CI/CD' },
  { label: 'Python' },
  { label: 'OpenTelemetry' },
  { label: 'Grafana' },
  { label: 'Agentic AI' },
];
```

2. Delete the `const skills: Skill[] = [...]` and `const researchAreas: ResearchArea[] = [...]` arrays.
3. Delete the type exports `export type Skill = string;` and `export type ResearchArea = string;` (keep `CoreCompetency`).
4. Change the Main usage to `<Main coreCompetencies={coreCompetencies} />`.

- [ ] **Step 5: Update the App.test.tsx Main mock**

In `src/App.test.tsx`:

1. Change the import line to: `import App, { CoreCompetency } from './App';`
2. Replace the `jest.mock('./components/Main', ...)` block with:

```tsx
jest.mock('./components/Main', () => ({ coreCompetencies }: { coreCompetencies: CoreCompetency[] }) => (
  <div data-testid="mock-main">
    Main Component
    <div data-testid="core-competencies">{coreCompetencies.length}</div>
  </div>
));
```

3. Delete any assertions referencing `data-testid="skills"` or `data-testid="research-areas"` further down the file.

- [ ] **Step 6: Run tests to verify they pass**

Run: `yarn test -- --testPathPattern="Main|App"`
Expected: PASS

- [ ] **Step 7: Commit**

```bash
git add src/App.tsx src/App.test.tsx src/components/Main.tsx src/components/__tests__/Main.test.tsx
git commit -m "refactor: trim skills to concrete tools, drop unused Main props"
```

---

### Task 5: Contact section

**Files:**
- Create: `src/components/Contact.tsx`
- Modify: `src/App.tsx` (replace the inline `<footer>` content with `<Contact />`)
- Test: `src/components/__tests__/Contact.test.tsx`
- Modify: `src/App.test.tsx` (mock Contact)

**Interfaces:**
- Consumes: `VisitorCounter` component (existing, prop `className?: string`).
- Produces: `Contact: React.FC` (no props), default export, renders `id="contact"` (nav link target). Contains `RESUME_AVAILABLE` constant (default `false`).

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Contact.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

jest.mock('../VisitorCounter', () => ({ className }: { className?: string }) => (
  <div data-testid="mock-visitor-counter" className={className} />
));

describe('Contact', () => {
  it('makes email the primary, zero-friction action', () => {
    render(<Contact />);

    const emailCta = screen.getByRole('link', { name: /email me/i });
    expect(emailCta).toHaveAttribute(
      'href',
      'mailto:cloudenochcsis@gmail.com?subject=Opportunity%20for%20Enoch'
    );
    // plain selectable text for copy-paste recruiters
    expect(screen.getByText('cloudenochcsis@gmail.com')).toBeInTheDocument();
  });

  it('never renders a dead resume link before the PDF exists', () => {
    render(<Contact />);

    expect(screen.queryByRole('link', { name: /resume/i })).not.toBeInTheDocument();
  });

  it('keeps the social links', () => {
    render(<Contact />);

    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', 'https://github.com/cloudenochcsis');
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/enoch-a-b00766138/'
    );
    expect(screen.getByRole('link', { name: /blog/i })).toHaveAttribute('href', 'https://cloudenoch.hashnode.dev/');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `yarn test -- --testPathPattern=Contact`
Expected: FAIL — `Cannot find module '../Contact'`

- [ ] **Step 3: Create Contact.tsx**

Create `src/components/Contact.tsx`. The three social-link SVG path strings are copied verbatim from the current `App.tsx` footer (GitHub, LinkedIn, Blog):

```tsx
import React from 'react';
import VisitorCounter from './VisitorCounter';

const CONTACT_EMAIL = 'cloudenochcsis@gmail.com';
const MAILTO_HREF = `mailto:${CONTACT_EMAIL}?subject=Opportunity%20for%20Enoch`;
// Flip to true after adding public/resume.pdf — keeps the button from ever 404ing.
const RESUME_AVAILABLE = false;

const socialLinks = [
  { href: 'https://github.com/cloudenochcsis', label: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
  { href: 'https://www.linkedin.com/in/enoch-a-b00766138/', label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { href: 'https://cloudenoch.hashnode.dev/', label: 'Blog', icon: 'M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z' },
];

const Contact: React.FC = () => (
  <footer className="text-center pt-16 pb-10 mt-20" id="contact">
    <div className="flex items-center justify-center gap-3 mb-12">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
      <span className="text-gray-600 text-sm font-mono">{'// contact'}</span>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
    </div>

    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Looking for a DevOps engineer?</h3>
    <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm">
      I build and run the infrastructure your team ships on. One email starts the conversation.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
      <a
        href={MAILTO_HREF}
        className="flex items-center gap-2 justify-center rounded-xl h-12 px-8 bg-[#0da6f2] text-white text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#0a8cd1] hover:scale-[1.03] hover:shadow-lg hover:shadow-[#0da6f2]/20 no-underline"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>Email me</span>
      </a>
      {RESUME_AVAILABLE && (
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 justify-center rounded-xl h-12 px-8 glass-card text-gray-300 text-sm font-semibold tracking-wide transition-all duration-300 hover:text-white hover:border-[#0da6f2]/30 hover:scale-[1.03] no-underline"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
          </svg>
          <span>Download resume (PDF)</span>
        </a>
      )}
    </div>

    <p className="text-gray-500 text-sm mb-10 font-mono select-all">{CONTACT_EMAIL}</p>

    <div className="flex justify-center flex-wrap gap-4 mb-10">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl glass-card text-gray-400 hover:text-white hover:border-[#0da6f2]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0da6f2]/5"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d={link.icon} />
          </svg>
          <span className="text-sm font-medium">{link.label}</span>
        </a>
      ))}
    </div>

    <VisitorCounter className="mb-8" />

    <p className="text-gray-600 text-xs">
      &copy; {new Date().getFullYear()} Enoch .A &mdash; Built with React, FastAPI &amp; MongoDB
    </p>
  </footer>
);

export default Contact;
```

- [ ] **Step 4: Wire Contact into App.tsx**

In `src/App.tsx`:

1. Add import: `import Contact from './components/Contact';`
2. Remove imports no longer used directly by App: `import VisitorCounter from './components/VisitorCounter';`
3. Replace the entire `<footer ... id="contact">...</footer>` JSX block with:

```tsx
            <Contact />
```

- [ ] **Step 5: Update App.test.tsx**

In `src/App.test.tsx`:

1. Add a mock next to the other component mocks:

```tsx
jest.mock('./components/Contact', () => () => <div data-testid="mock-contact">Contact</div>);
```

2. Remove the `jest.mock('./components/VisitorCounter', ...)` block and any assertion referencing `mock-visitor-counter` (VisitorCounter now renders inside the mocked Contact).

- [ ] **Step 6: Run tests to verify they pass**

Run: `yarn test -- --testPathPattern="Contact|App"`
Expected: PASS

- [ ] **Step 7: Commit**

```bash
git add src/components/Contact.tsx src/components/__tests__/Contact.test.tsx src/App.tsx src/App.test.tsx
git commit -m "feat: dedicated contact section with email CTA and gated resume download"
```

---

### Task 6: Delete dead and fabricated code

**Files:**
- Delete: `src/components/Main_old.tsx`, `src/components/Connect.tsx`, `src/components/ResearchAreas.tsx`, `src/components/SkillList.tsx`, `src/components/Section.tsx`, `src/contexts/ResumeContext.tsx`
- Modify: `src/App.tsx` (remove ResumeProvider), `src/App.test.tsx` (remove ResumeContext mock), `package.json` (remove lucide-react)

Rationale: nothing imports these components (verified via grep — only `App.tsx` imports Header/Main/VisitorCounter). `ResumeContext` is provided but never consumed (`useResume` has zero callers), and it contains fabricated publications with placeholder DOIs. `lucide-react` is imported only by the deleted files.

- [ ] **Step 1: Delete the dead files**

```bash
git rm src/components/Main_old.tsx src/components/Connect.tsx src/components/ResearchAreas.tsx src/components/SkillList.tsx src/components/Section.tsx src/contexts/ResumeContext.tsx
```

- [ ] **Step 2: Remove ResumeProvider from App.tsx**

In `src/App.tsx`:

1. Delete: `import { ResumeProvider } from './contexts/ResumeContext';`
2. Change the App component's JSX from:

```tsx
    <ThemeProvider>
      <ResumeProvider>
        <AppContent />
      </ResumeProvider>
    </ThemeProvider>
```

to:

```tsx
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
```

- [ ] **Step 3: Remove the ResumeContext mock from App.test.tsx**

In `src/App.test.tsx`, delete the `jest.mock('./contexts/ResumeContext', ...)` block and the assertion `expect(screen.getByTestId('resume-provider')).toBeInTheDocument();`.

- [ ] **Step 4: Remove lucide-react**

```bash
grep -rn "lucide-react" src || echo "no remaining imports"
yarn remove lucide-react
```

Expected: `no remaining imports`, then yarn updates `package.json` and `yarn.lock` cleanly.

- [ ] **Step 5: Run the full suite to verify nothing broke**

Run: `yarn test`
Expected: ALL test files PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "refactor: remove dead components, fabricated resume data, and lucide-react"
```

---

### Task 7: Full verification + build

**Files:** none new.

- [ ] **Step 1: Full test suite**

Run: `yarn test`
Expected: all suites pass (App, Header, Main, About, Projects, Contact, VisitorCounter, metadata).

- [ ] **Step 2: Production build**

Run: `yarn build`
Expected: `Compiled successfully.` No TypeScript errors, no unused-import ESLint failures (CRA treats warnings as errors in CI).

- [ ] **Step 3: Smoke-check the rendered page**

Run: `npx serve -s build -l 3999 &` then fetch `curl -s http://localhost:3999 | grep -o "Get in touch"` — expected output `Get in touch`. Kill the server afterwards. (Full visual/interaction verification happens in the browser during review; anchors `#about`, `#projects`, `#contact` must all resolve — Header nav links depend on About/Projects/Contact rendering those ids.)

- [ ] **Step 4: Commit any stragglers and stop**

```bash
git status --short
```

Expected: clean. Do NOT push — the user reviews the result locally first.

## Assets the user provides later (site must work without them)

1. Headshot → add to `public/`, set `HEADSHOT_SRC` in `About.tsx`.
2. `public/resume.pdf` → flip `RESUME_AVAILABLE` in `Contact.tsx`.
3. Verify links for CKA / Azure DevOps Expert → append to `certifications` in `About.tsx`.

# Portfolio Enhancement — Design

**Date:** 2026-07-05
**Repo:** cloudenochcsis/cloudresume
**Goal:** Make the portfolio convert visits from hiring managers/recruiters into contact — via a premium project showcase, a trust-building About section, and a zero-friction contact CTA.

## Context

Current site: React (CRA) + Tailwind single page, dark glass-card theme. Hero with typing effect, About card with generic stats, skills chips, 4 equal-weight project cards linking to GitHub, footer with GitHub/LinkedIn/Blog links. **No email or direct contact action exists on the page.** Project descriptions read like repo READMEs. `ResumeContext.tsx` contains unused fabricated data (fake DOIs, placeholder companies).

**Audience:** full-time employers and recruiters (not freelance clients).
**Approach chosen:** content-first polish — keep the existing visual system, restructure content. No new dependencies, no visual redesign.

## 1. Hero

- Keep name, typing effect, and "Open to opportunities" badge.
- Replace the single "View My Work" button with two:
  - **Primary:** "Get in touch" → `mailto:cloudenochcsis@gmail.com?subject=Opportunity for Enoch`
  - **Secondary:** "View work ↓" → `#projects`

## 2. About = trust section

- **Photo:** layout reserves a spot beside the intro text; renders text-only until the user adds an image file (no broken/placeholder image ever shown).
- **Intro paragraph:** rewritten first-person, leads with what he does for teams (ships reliable infrastructure, automates delivery) rather than a keyword list.
- Replace the current 3 generic stat tiles with three verifiable trust rows:
  1. **Certifications** — badge cards, each linking to its verification page:
     - AWS Certified Solutions Architect – Associate (Credly link — exists in repo data)
     - HashiCorp Terraform Certified Associate (Credly link — exists in repo data)
     - Microsoft Azure Administrator (MS Learn link — exists in repo data)
     - CKA and Azure DevOps Engineer Expert: **included only if the user supplies verify links**; otherwise omitted entirely (no bare, unverifiable claims).
  2. **Open source** — "9 merged PRs to OpenSRE (Tracer-Cloud/opensre)" linking to the GitHub merged-PR filter for author cloudenochcsis. Verified 2026-07-05.
  3. **GitHub** — profile link framed as "every project below is public — read the code."

## 3. Project showcase — featured case study + grid

- **Featured card (full-width):** OpenTelemetry DevOps Platform
  - What it is: microservices system on Kubernetes with a full observability stack.
  - 3–4 architecture bullets: K8s deployments, ArgoCD GitOps delivery, distributed tracing via OpenTelemetry, Grafana dashboards. Mention the companion repos (`opentelemetry-k8s-manifests`, `opentelemetry-k8s-terraform`) as part of the platform.
  - "What this demonstrates" line addressed to a hiring manager (production-grade K8s, GitOps, observability).
  - CTA: "View code →".
- **Grid (3 cards) below:**
  1. **Multi-cloud 3-tier Terraform architecture** — one card covering the AWS + Azure + GCP repo trio (`terraform-aws-3tier-architecture`, `terraform-azure-3tier-architecture`, `terraform-gcp-3tier-architecture`), with three "AWS / Azure / GCP" repo links. The multi-cloud angle is the differentiator.
  2. **Terraform GitOps for AKS** — rewritten description (decision-led, not README-led).
  3. **This site** — React + FastAPI + MongoDB, CircleCI pipeline, Docker/nginx deploy; framed as "the portfolio is itself a DevOps artifact," links to the cloudresume repo.
- All descriptions rewritten to outcome/decision language. Drop the current "Agentic AI Automation Platform" card (links only to the profile, not a real project — weakest card).

## 4. Contact section (replaces footer links-only ending)

- Heading: "Looking for a DevOps engineer?" + one-line pitch.
- **Primary:** large email button (same mailto as hero).
- **Secondary:** "Download resume (PDF)" → `/resume.pdf`, gated by a `RESUME_AVAILABLE` constant (default `false`; user flips it to `true` when they add `public/resume.pdf`) — never a dead link.
- Email address also displayed as plain selectable text.
- Existing GitHub / LinkedIn / Blog links kept, smaller, beneath the CTA.
- VisitorCounter and copyright line stay.

## 5. Skills section

- Keep the chip layout. Trim abstract filler chips (Scalability, Resilience, Orchestration, Logging) in favor of concrete tools already evidenced by the projects (Terraform, Kubernetes, ArgoCD, Docker, AWS, Azure, GCP, Python, CI/CD, OpenTelemetry/Grafana).

## 6. Cleanup

- Delete `src/components/Main_old.tsx` and `src/components/Connect.tsx` (both unused; Connect contains an `alert()` stub and a stale email).
- Strip `ResumeContext.tsx` of fabricated content: fake publications (placeholder DOIs), placeholder experience entries, and education entries the user hasn't verified. Keep only the interfaces/data actually rendered — if nothing renders from it after this redesign, delete the file and its provider entirely.
- Remove the now-unused `lucide-react` usage if Connect was its only consumer (drop the dependency if nothing else imports it).

## Data flow / architecture

No architectural change. Content stays as typed constants co-located with components (current pattern). Components touched: `Header.tsx` (hero CTAs), `Main.tsx` (About, Skills, Projects), `App.tsx` (contact section), plus deletions. FastAPI backend untouched (visitor counter only).

## Error handling

- Resume button: gated so it never 404s.
- Photo: layout degrades gracefully with no image.
- No unverifiable claims rendered anywhere (certs without links are omitted, not shown bare).

## Testing

- Update existing Jest tests (`Header.test.tsx`, `Main.test.tsx`, `App.test.tsx`, `metadata.test.ts`) to match new content/structure.
- Add assertions: hero mailto href present; contact section email button present; resume button absent when no PDF; featured project card renders with its repo link.
- `yarn test` and `yarn build` must pass.

## Assets the user provides later (site must work without them)

1. Headshot image.
2. `public/resume.pdf`.
3. Verify links for CKA / Azure DevOps Expert (optional — omitted until provided).

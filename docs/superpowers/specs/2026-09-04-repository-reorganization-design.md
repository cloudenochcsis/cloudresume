# Repository Architecture & Directory Reorganization — Design Spec

**Date:** 2026-09-04  
**Project:** Cloud Enoch (cloudenoch.com)  
**Author:** Cloud & DevOps Platform Engineering  
**Status:** Approved  

---

## 1. Executive Summary & Goals

The Cloud Enoch repository powers the production portfolio and DevOps showcase for Enoch Ayivor at [cloudenoch.com](https://cloudenoch.com). Over successive evolutions—migrating from Create React App to Next.js 14 App Router, introducing a FastAPI backend for visitor analytics, and automating deployments via CircleCI to DigitalOcean—the repository accumulated scattered files, duplicate components, legacy entry points, and root-level clutter.

### Primary Objectives:
1. **Consolidate Frontend under `src/`**: Adopt the industry-standard Next.js `src/` directory pattern (`src/app/`, `src/components/`, `src/data/`, `src/content/`), eliminating duplicate data files and parallel component trees.
2. **Eliminate Dead & Legacy Code**: Safely prune legacy Create React App remnants (`App.tsx`, `index.tsx`, `reportWebVitals.ts`, etc.) and duplicate CRA components while ensuring 100% test coverage of active Next.js components.
3. **Clean & Standardize Backend (`api/`)**: Consolidate FastAPI tests under `api/test/`, removing duplicate root test files, and ensuring Python test artifacts and caches are cleanly ignored.
4. **Modernize Docker & DevOps Assets**: Update `Dockerfile` from obsolete `node:16` to `node:20-alpine` to align with Next.js 14 requirements and CircleCI runtime environments.
5. **Elevate Repository Documentation**: Create an exemplary, recruiter-ready `README.md` featuring architecture diagrams, technology breakdown, folder taxonomy, local setup commands, and deployment runbooks.

---

## 2. Current State vs. Target State

### Current State (Fragmented & Scattered)
```
cloudresume/
├── .circleci/
├── api/
│   ├── conftest.py          <-- Duplicate
│   ├── test_main.py         <-- Duplicate
│   ├── test/
│   │   ├── conftest.py
│   │   └── test_main.py
│   └── ...
├── app/                     <-- Root Next.js App Router
├── components/              <-- Root Next.js Components
├── content/                 <-- Root MDX content
├── data/                    <-- Root portfolioData.ts
│   └── portfolioData.ts     <-- Exact duplicate of src/data/portfolioData.ts
├── src/                     <-- Legacy CRA tree mixed with old components
│   ├── App.tsx              <-- Dead CRA entrypoint
│   ├── index.tsx            <-- Dead CRA entrypoint
│   ├── components/          <-- Legacy CRA components (Header, Main, Projects, etc.)
│   └── data/
│       └── portfolioData.ts
├── Dockerfile               <-- node:16 (outdated)
├── README.md                <-- Outdated 13-line CRA stub
└── ...
```

### Target State (Clean, Unified, & Standardized)
```
cloudresume/
├── .circleci/               # CI/CD pipelines (frontend, backend, deploy)
│   ├── config.yml
│   ├── configure_nginx.sh
│   └── resume-api.service
├── api/                     # Python 3.11+ FastAPI Visitor Counter API
│   ├── main.py
│   ├── requirements.txt
│   ├── pytest.ini
│   ├── Dockerfile
│   ├── .env.example
│   └── test/
│       ├── conftest.py
│       └── test_main.py
├── docs/                    # Architecture & engineering documentation
│   ├── architecture.md
│   └── superpowers/
│       ├── plans/
│       └── specs/
├── nginx/                   # Reverse proxy & static hosting configs
│   ├── nginx.conf
│   └── nginx.prod.conf
├── public/                  # Static web assets (favicons, manifest, etc.)
├── scripts/                 # Server provisioning & ops scripts
│   └── setup-server.sh
├── src/                     # Canonical Next.js 14 Frontend Application
│   ├── app/                 # App Router pages, layout, and global styles
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/          # Production UI components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── FeaturedProject.tsx
│   │   ├── SkillsGrid.tsx
│   │   ├── ExperienceTimeline.tsx
│   │   ├── Certifications.tsx
│   │   ├── BlogPreview.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── VisitorCounter.tsx
│   │   ├── GitOpsDiagram.tsx
│   │   ├── icons/
│   │   │   └── Icons.tsx
│   │   └── __tests__/       # Component unit & integration test suites
│   ├── content/             # MDX articles & technical deep-dives
│   │   └── posts/
│   ├── data/                # Single source of truth data models
│   │   └── portfolioData.ts
│   └── hooks/               # Custom React hooks (useReveal, etc.)
├── docker-compose.yml       # Local fullstack service orchestration
├── Dockerfile               # Production multi-stage build (Node 20 Alpine -> Nginx Alpine)
├── next.config.mjs          # Next.js static export configuration
├── package.json             # Pinned frontend dependencies & scripts
├── tailwind.config.js       # Modern Tailwind theme configuration
├── tsconfig.json            # TypeScript configuration with @/* path alias
├── DEPLOYMENT.md            # DigitalOcean + Systemd production runbook
└── README.md                # Architectural overview, showcase, and runbook
```

---

## 3. Component Architecture & Migration Strategy

### Frontend Canonicalization:
1. **Next.js `src/` Directory Standard**:
   Next.js natively detects `src/app`. By placing `app/` inside `src/app/`, `src/components/`, `src/data/`, and `src/content/`, the entire frontend codebase is scoped cleanly within `src/`.
2. **Single Source of Truth**:
   Consolidate `portfolioData.ts` solely into `src/data/portfolioData.ts`. All components import from `@/data/portfolioData` or `../data/portfolioData`.
3. **Unit Test Suite Modernization**:
   Retain Jest + `@testing-library/react`. Rewrite test suites in `src/components/__tests__/` to test the active Next.js components (`Hero`, `About`, `FeaturedProject`, `SkillsGrid`, `ExperienceTimeline`, `Certifications`, `BlogPreview`, `Footer`, `Navigation`, `VisitorCounter`, `GitOpsDiagram`). Maintain zero regressions and 100% test pass rates across CircleCI.

### Backend Canonicalization:
1. Remove loose `api/test_main.py` and `api/conftest.py`.
2. Rely entirely on `api/test/test_main.py` and `api/test/conftest.py`, which match `api/pytest.ini` (`testpaths = test`).
3. Add Python build artifacts (`.coverage`, `coverage.xml`, `.pytest_cache`, `test-results/`) to `.gitignore`.

### Containerization & Deployment:
1. Update `Dockerfile` to `node:20-alpine` build stage.
2. Keep root `nginx.conf` and create `nginx/` directory for modular configuration.
3. Ensure CircleCI `build-and-test-frontend` and `build-and-test-backend` pass seamlessly.

---

## 4. Verification & Quality Gates

- **Unit Tests**:
  - Frontend: `npm test -- --watchAll=false` (all test suites pass).
  - Backend: `pytest` in `api/` (all 4 tests pass).
- **Linter**:
  - `yarn run eslint .` (0 errors).
- **Production Build**:
  - `npm run build` (Next.js static export generates `out/` and `build/` cleanly with 0 errors).
- **CI/CD Integration**:
  - Verify CircleCI pipeline execution on PR.

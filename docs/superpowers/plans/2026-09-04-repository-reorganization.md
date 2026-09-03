# Repository Reorganization Implementation Plan

> **For agentic workers:** Follow this plan task-by-task. Each step includes explicit verification commands. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reorganize the repository into a clean, modern, unified Next.js + FastAPI project structure, eliminating legacy dead code, duplicate components, and root clutter while maintaining 100% test pass rate and CircleCI readiness.

**Spec:** `docs/superpowers/specs/2026-09-04-repository-reorganization-design.md`

---

## Task 1: Clean and Consolidate Backend (`api/`)

**Files:**
- Remove: `api/test_main.py`, `api/conftest.py` (redundant with `api/test/`)
- Verify: `api/test/test_main.py`, `api/test/conftest.py`, `api/pytest.ini`
- Modify: `.gitignore` (add Python test artifacts & caches)

- [ ] **Step 1: Remove duplicate test files in `api/` root**
- [ ] **Step 2: Update `.gitignore` with Python test caches**
- [ ] **Step 3: Run backend test suite to verify 100% pass**
  Command: `pytest` inside `api/`

---

## Task 2: Consolidate Frontend Structure into `src/`

**Files:**
- Move: `app/` -> `src/app/`
- Replace: `src/components/` with active Next.js components from `components/`
- Move: `content/` -> `src/content/` (and keep `content/` symlinked or alias if needed)
- Consolidate: `data/portfolioData.ts` -> `src/data/portfolioData.ts` (single source of truth)
- Remove: Obsolete CRA files (`src/App.tsx`, `src/App.css`, `src/index.tsx`, `src/index.css`, `src/reportWebVitals.ts`, `src/react-app-env.d.ts`, `src/logo.svg`, root `data/`, root `components/`, root `app/`)
- Update: `src/components/icons/Icons.tsx` to be self-contained (not importing from a relative parent)

- [ ] **Step 1: Move `app/` into `src/app/`**
- [ ] **Step 2: Replace legacy `src/components/` with canonical Next.js components**
- [ ] **Step 3: Ensure `src/components/icons/Icons.tsx` has complete SVG icon definitions**
- [ ] **Step 4: Move `content/` into `src/content/`**
- [ ] **Step 5: Remove root `app/`, `components/`, `data/`, and obsolete CRA entrypoint files**
- [ ] **Step 6: Update `tsconfig.json` with `@/*` path mapping**

---

## Task 3: Modernize Component Unit Test Suites

**Files:**
- Rewrite / Update: `src/components/__tests__/` to test active Next.js components:
  - `Hero.test.tsx`
  - `About.test.tsx`
  - `FeaturedProject.test.tsx`
  - `SkillsGrid.test.tsx`
  - `ExperienceTimeline.test.tsx`
  - `Certifications.test.tsx`
  - `BlogPreview.test.tsx`
  - `Footer.test.tsx`
  - `Navigation.test.tsx`
  - `VisitorCounter.test.tsx`
  - `GitOpsDiagram.test.tsx`
- Retain / Update: `src/__tests__/metadata.test.ts`

- [ ] **Step 1: Write test suites for canonical components**
- [ ] **Step 2: Run `npm test -- --watchAll=false` and ensure 100% passing tests**
- [ ] **Step 3: Run `yarn run eslint .` and ensure 0 lint errors**

---

## Task 4: Modernize Docker, Nginx & DevOps Assets

**Files:**
- Modify: `Dockerfile` (upgrade from `node:16` to `node:20-alpine`)
- Create: `nginx/` directory containing `nginx.conf` and `nginx.prod.conf` (keep root `nginx.conf` for backward compatibility with Dockerfile/CircleCI)
- Verify: `docker-compose.yml`

- [ ] **Step 1: Update `Dockerfile` to `node:20-alpine`**
- [ ] **Step 2: Organize `nginx/` configurations**
- [ ] **Step 3: Test `npm run build` (Next.js static export)**

---

## Task 5: Upgrade Documentation & Repository README

**Files:**
- Create: `README.md` (comprehensive architecture, live URL, tech stack, directory taxonomy, local dev, Docker, CI/CD, testing)
- Create: `docs/architecture.md` (detailed architectural breakdown and data flow)

- [ ] **Step 1: Write comprehensive `README.md`**
- [ ] **Step 2: Write `docs/architecture.md`**

---

## Task 6: Final Verification & Git Push

- [ ] **Step 1: Run all test suites (frontend & backend)**
- [ ] **Step 2: Run linter and static build**
- [ ] **Step 3: Commit changes (avoiding "agy" in commit message)**
- [ ] **Step 4: Push to remote and open Pull Request**
- [ ] **Step 5: Verify CircleCI passes**

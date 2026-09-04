# Repository Clean-Up and Standardization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clean up all redundant root files, relocate deployment documentation to `docs/`, purge legacy Create React App remnants, and restore Next.js native Rust SWC compiler execution.

**Architecture:** Remove duplicate server configs (`nginx.conf`, `nginx.prod.conf`) in favor of `nginx/`, migrate `DEPLOYMENT.md` to `docs/deployment.md`, delete dead CRA artifacts (`public/index.html`, `src/hooks/useReveal.ts`), and eliminate root `babel.config.js` by inlining Jest Babel transform presets.

**Tech Stack:** Next.js 14 App Router, TypeScript, Jest, Tailwind CSS, Docker, Nginx, Python FastAPI, Pytest.

**Spec:** [`docs/superpowers/specs/2026-09-04-repository-cleanup-and-standardization-design.md`](file:///Users/akpadetsi/2026%20Projects/cloudresume/docs/superpowers/specs/2026-09-04-repository-cleanup-and-standardization-design.md)

## Global Constraints

- Never use the substring "a-g-y" in any git branch name, commit message, or PR title.
- Maintain 100% pass rate on all 13 frontend test suites (35 tests) and backend pytest suite (4 tests).
- Retain exact application functionality and styling without regression.
- Keep the repository root minimal: only standard root configs (`package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.js`, `postcss.config.js`, `jest.config.js`, `Dockerfile`, `docker-compose.yml`, `README.md`).

---

### Task 1: Eliminate Root Duplicate Nginx Files & Update Dockerfile

**Files:**
- Delete: `nginx.conf`
- Delete: `nginx.prod.conf`
- Modify: `Dockerfile:12`
- Verify: `nginx/nginx.conf`, `nginx/nginx.prod.conf`

**Interfaces:**
- Consumes: Canonical Nginx configuration files in `nginx/`.
- Produces: Updated `Dockerfile` copying from `nginx/nginx.conf`.

- [ ] **Step 1: Verify canonical configs exist in `nginx/`**

Run: `ls -la nginx/nginx.conf nginx/nginx.prod.conf`
Expected: Both files exist and are populated.

- [ ] **Step 2: Update Dockerfile line 12**

Modify `Dockerfile` line 12 from:
```dockerfile
COPY nginx.conf /etc/nginx/conf.d/default.conf
```
to:
```dockerfile
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
```

- [ ] **Step 3: Remove redundant root Nginx configs**

Run: `git rm nginx.conf nginx.prod.conf`

- [ ] **Step 4: Commit changes**

Run:
```bash
git add Dockerfile
git commit -m "chore: remove duplicate root nginx configs and update Dockerfile path"
```

---

### Task 2: Relocate Deployment Documentation to `docs/`

**Files:**
- Move: `DEPLOYMENT.md` $\rightarrow$ `docs/deployment.md`
- Modify: `README.md`
- Modify: `docs/architecture.md`

**Interfaces:**
- Consumes: Existing deployment guide.
- Produces: Centrally located `docs/deployment.md` with updated references.

- [ ] **Step 1: Move DEPLOYMENT.md into docs/**

Run: `git mv DEPLOYMENT.md docs/deployment.md`

- [ ] **Step 2: Update link references in README.md**

Check and update any references from `DEPLOYMENT.md` to `docs/deployment.md`.

- [ ] **Step 3: Update link references in docs/architecture.md**

Ensure `docs/architecture.md` references `docs/deployment.md` where appropriate.

- [ ] **Step 4: Commit changes**

Run:
```bash
git add README.md docs/architecture.md docs/deployment.md
git commit -m "docs: relocate deployment guide to docs/deployment.md"
```

---

### Task 3: Purge Legacy Create React App Residue & Unused Hooks

**Files:**
- Delete: `public/index.html`
- Delete: `src/hooks/useReveal.ts`

**Interfaces:**
- Consumes: Next.js 14 App Router layout (`src/app/layout.tsx`).
- Produces: Clean `public/` directory without CRA `%PUBLIC_URL%` template; clean `src/` without dead hooks.

- [ ] **Step 1: Verify public/index.html is obsolete**

Inspect `src/app/layout.tsx` to confirm title, meta, fonts, and HTML structure are defined by Next.js App Router.

- [ ] **Step 2: Delete public/index.html and src/hooks/useReveal.ts**

Run:
```bash
git rm public/index.html src/hooks/useReveal.ts
```

- [ ] **Step 3: Run test suite to verify no imports were broken**

Run: `npm test -- --watchAll=false`
Expected: 13 passed, 13 total.

- [ ] **Step 4: Commit changes**

Run:
```bash
git commit -m "chore: purge legacy CRA index.html and unused hook"
```

---

### Task 4: Re-Enable Next.js Native Rust SWC Compiler

**Files:**
- Delete: `babel.config.js`
- Modify: `jest.config.js:10-13`

**Interfaces:**
- Consumes: Inlined Babel presets in `jest.config.js`.
- Produces: Zero-config Babel in root, re-enabling Next.js native Rust SWC compiler.

- [ ] **Step 1: Verify inline transform in jest.config.js**

Ensure `jest.config.js` contains:
```javascript
transform: {
  '^.+\\.(ts|tsx)$': ['ts-jest', {
    tsconfig: 'tsconfig.json',
    isolatedModules: true,
  }],
  '^.+\\.(js|jsx)$': ['babel-jest', {
    presets: ['@babel/preset-env', '@babel/preset-react'],
  }],
},
```

- [ ] **Step 2: Remove root babel.config.js**

Run: `git rm babel.config.js`

- [ ] **Step 3: Run Jest tests to verify test execution without babel.config.js**

Run: `npm test -- --watchAll=false`
Expected: 13 passed, 13 total.

- [ ] **Step 4: Run Next.js build to verify native SWC compiler activation**

Run: `npm run build && rm -rf out build`
Expected: Build succeeds without "Disabled SWC as replacement for Babel" warning.

- [ ] **Step 5: Commit changes**

Run:
```bash
git commit -m "perf: enable native Next.js SWC compiler and inline Jest Babel presets"
```

---

### Task 5: End-to-End Verification & Pull Request Delivery

**Files:**
- Verify: Full repository test suite, linter, and static build.

**Interfaces:**
- Consumes: All cleaned and relocated repository files.
- Produces: Clean branch, all green tests, and open PR.

- [ ] **Step 1: Run frontend tests**

Run: `npm test -- --watchAll=false`
Expected: 13 passed, 13 total.

- [ ] **Step 2: Run backend tests**

Run: `cd api && pytest`
Expected: 4 passed.

- [ ] **Step 3: Run ESLint**

Run: `./node_modules/.bin/eslint .`
Expected: 0 errors.

- [ ] **Step 4: Verify working directory is clean**

Run: `git status`
Expected: Clean working tree.

- [ ] **Step 5: Push branch and open Pull Request**

Run:
```bash
git push -u origin chore/repository-cleanup-and-standardization
gh pr create --title "Chore: repository cleanup, documentation relocation, and SWC compiler activation" --body "..."
```
Expected: PR opened, CircleCI builds triggered.

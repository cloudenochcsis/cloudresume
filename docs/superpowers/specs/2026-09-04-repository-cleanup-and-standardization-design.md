# Repository Clean-Up and Standardization Design Spec

**Date:** 2026-09-04  
**Author:** Enoch  
**Status:** Approved by User  
**Target:** Production Repository (`cloudenochcsis/cloudresume`)

---

## 1. Problem Statement

Following the migration to Next.js 14 App Router and repository consolidation into `src/`, residual files and duplicate configurations remain scattered across the repository:
1. **Redundant Server Configurations in Root**: `nginx.conf` and `nginx.prod.conf` exist in both the root directory and `nginx/`.
2. **Scattered Documentation**: `DEPLOYMENT.md` resides in the root instead of alongside system documentation in `docs/`.
3. **Dead Create React App Artifacts**: `public/index.html` contains obsolete CRA markup (`%PUBLIC_URL%`) that conflicts with Next.js App Router's static export. `src/hooks/useReveal.ts` is unused.
4. **Suboptimal Compiler Configuration**: A root `babel.config.js` disables Next.js's high-speed Rust-based SWC compiler during production builds (`next build`).
5. **Containerfile Inaccuracy**: `Dockerfile` copies `nginx.conf` from the root instead of the canonical `nginx/` directory.

---

## 2. Goals & Non-Goals

### Goals
- Establish a single source of truth for all configurations and documentation.
- Eliminate root clutter and dead code remnants.
- Restore Next.js native Rust SWC compilation performance.
- Maintain 100% passing status for all frontend (Jest) and backend (Pytest) test suites.
- Ensure Docker container builds and CI/CD workflows run seamlessly.

### Non-Goals
- Changing UI appearance, styling, or application behavior.
- Moving configuration files (`tailwind.config.js`, `tsconfig.json`) into non-standard subdirectories that would disrupt CLI tools.

---

## 3. Detailed Technical Plan

### 3.1 File Relocations & Purges

1. **Delete Duplicate Nginx Files in Root**:
   - Remove `nginx.conf` (root).
   - Remove `nginx.prod.conf` (root).
   - Retain canonical files: `nginx/nginx.conf` and `nginx/nginx.prod.conf`.

2. **Move Deployment Guide to `docs/`**:
   - Move `DEPLOYMENT.md` to `docs/deployment.md`.
   - Update references in `README.md` and `docs/architecture.md`.

3. **Purge Legacy Create React App Residue**:
   - Delete `public/index.html` (Next.js 14 App Router generates HTML from `src/app/layout.tsx`).
   - Delete `src/hooks/useReveal.ts` (orphaned hook).

### 3.2 Configuration Updates

1. **Update `Dockerfile`**:
   - Modify line 12 to copy from `nginx/nginx.conf`:
     ```dockerfile
     COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
     ```

2. **Inline Babel Presets in `jest.config.js` and Remove `babel.config.js`**:
   - Ensure `jest.config.js` maintains full compatibility for `babel-jest`:
     ```javascript
     transform: {
       '^.+\\.(ts|tsx)$': ['ts-jest', {
         tsconfig: 'tsconfig.json',
         isolatedModules: true,
       }],
       '^.+\\.(js|jsx)$': ['babel-jest', {
         presets: ['@babel/preset-env', '@babel/preset-react'],
       }],
     }
     ```
   - Delete root `babel.config.js`. Next.js will automatically use SWC, resolving the warning and speeding up build times.

### 3.3 Target Repository Structure

```text
cloudresume/
├── .circleci/               # CI/CD workflows and deployment scripts
│   ├── config.yml
│   ├── configure_nginx.sh
│   └── resume-api.service
├── api/                     # Python FastAPI backend service
│   ├── main.py
│   ├── pytest.ini
│   ├── requirements.txt
│   └── test/
├── docs/                    # Architecture, deployment, and specs
│   ├── architecture.md
│   ├── deployment.md
│   └── superpowers/
├── nginx/                   # Reverse proxy configs
│   ├── nginx.conf
│   └── nginx.prod.conf
├── public/                  # Static assets (favicons, logos, robots.txt, manifest)
├── scripts/                 # Server provisioning scripts (setup-server.sh)
├── src/                     # Next.js 14 frontend application code
│   ├── __tests__/
│   ├── app/
│   ├── components/
│   ├── content/
│   ├── data/
│   └── setupTests.ts
├── Dockerfile               # Multi-stage container build
├── docker-compose.yml       # Local orchestration
├── jest.config.js           # Jest configuration
├── next.config.mjs          # Next.js configuration
├── package.json             # NPM dependencies & scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

---

## 4. Verification & Testing

1. **Frontend Tests**: `npm test -- --watchAll=false` (All 13 test suites must pass).
2. **Backend Tests**: `cd api && pytest` (All 4 tests must pass).
3. **Linting**: `./node_modules/.bin/eslint .` (No lint errors).
4. **Production Build**: `npm run build && rm -rf out build` (Verify SWC compilation is active and build passes).
5. **Docker Build**: `docker build -t cloudresume:test .` (Optional dry-run verification).

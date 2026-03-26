# Blackbox Sanity Suite

Automated Playwright test suite for [cloud.blackbox.ai](https://cloud.blackbox.ai).
Runs daily via GitHub Actions and can also be triggered manually.

## Tests Covered (27 tests)

- **Section 1**: Basic sanity (site loads, login, sidebar, prompt textarea)
- **Section 2**: Model switching
- **Section 3**: Repo & branch switching (requires GitHub connected)
- **Section 4**: Agent selection dropdown
- **Section 5**: Single agent flows (Blackbox, Claude, Codex)
- **Section 6**: Multi-agent flows
- **Section 7**: Combo flows (model + repo + branch + multi-agent)

## Local Setup

```bash
npm install
npx playwright install chromium
# Place your auth.json in root (do NOT commit it)
npx playwright test
```

## GitHub Actions Setup

### 1. Generate auth.json locally

```bash
npx playwright codegen --save-storage=auth.json https://cloud.blackbox.ai
# Log in manually, then close the browser
```

### 2. Add AUTH_JSON secret to GitHub

1. Go to your repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `AUTH_JSON`
4. Value: paste the **entire contents** of your `auth.json` file
5. Click **Add secret**

### 3. Run manually

Go to **Actions** tab → **Blackbox Daily Sanity Suite** → **Run workflow**

## Schedule

Runs automatically every day at **9:00 AM IST** (3:30 AM UTC).

## Reports

Test reports are uploaded as artifacts after each run (kept for 30 days).

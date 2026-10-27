# emPLE Pension Trust

Responsive website for emPLE Pension Trust Ghana, built with Next.js, React, TypeScript, and Tailwind CSS.

## Run Locally

Prerequisite: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run typecheck
npm run build
```

## Security headers

`next.config.mjs` applies Content-Security-Policy, X-Frame-Options,
X-Content-Type-Options, Referrer-Policy, and Permissions-Policy to all routes.
The HTTPS host remains responsible for Strict-Transport-Security (already
present in the supplied scan).

The CSP allows Google Fonts, Icons8 images, and the SeamlessHiring integration.
It permits inline scripts for Next.js static-page hydration and inline styles
for React/Motion. This is a baseline policy, not full inline-script XSS protection;
a nonce-based policy would require dynamic rendering. Production disallows eval.

After deploying, check response headers on the public URL and re-run the scan.
Also check fonts, social icons, and vacancies in the browser for CSP violations,
since the third-party embed may change its resource dependencies.

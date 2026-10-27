const isDevelopment = process.env.NODE_ENV === 'development';
const hiringOrigins = 'https://emplegh.seamlesshiring.com https://seamlesshiring.com';

// Inline scripts support Next.js static-page hydration. Inline styles support
// React styles, Motion, and the vacancies embed. Eval is development-only.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${isDevelopment ? "'unsafe-eval' " : ''}${hiringOrigins}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  `img-src 'self' data: blob: https://img.icons8.com ${hiringOrigins}`,
  "font-src 'self' https://fonts.gstatic.com",
  `connect-src 'self' ${hiringOrigins}${isDevelopment ? ' ws: wss:' : ''}`,
  `frame-src ${hiringOrigins}`,
  "object-src 'none'",
  "base-uri 'self'",
  `form-action 'self' ${hiringOrigins}`,
  "frame-ancestors 'none'",
  ...(!isDevelopment ? ['upgrade-insecure-requests'] : []),
].join('; ');

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'Content-Security-Policy', value: contentSecurityPolicy },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), browsing-topics=()' },
      ],
    }];
  },
};

export default nextConfig;

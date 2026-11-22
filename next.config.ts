import type { NextConfig } from "next";

/**
 * Content-Security-Policy volontairement souple : le site ne charge que ses
 * propres fichiers, plus Google Maps (carte de la page Contact).
 * Pour autoriser un nouveau service (statistiques, vidéo externe…), ajoutez
 * son domaine à la ligne concernée.
 */
const csp = [
  "default-src 'self'",
  // Next.js insère de petits scripts et styles dans la page.
  `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "media-src 'self' blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src 'self' https://*.google.com",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },
  /** Anciennes adresses (avant la refonte) : redirection permanente. */
  async redirects() {
    const moved = [
      { from: "/a-propos", to: "/groupe" },
      { from: "/expertises", to: "/services" },
      { from: "/expertises/:slug", to: "/services/:slug" },
    ];
    return moved.flatMap(({ from, to }) => [
      { source: from, destination: `/fr${to}`, permanent: true },
      { source: `/fr${from}`, destination: `/fr${to}`, permanent: true },
      { source: `/en${from}`, destination: `/en${to}`, permanent: true },
    ]);
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;

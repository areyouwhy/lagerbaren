import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow SVG through the next/image optimizer for owner-uploaded logos.
    // We trust the source (Keystatic-managed assets the venue owner controls)
    // so the typical XSS-via-SVG attack surface doesn't apply here.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;

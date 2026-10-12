import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ] }];
  },
  // Explicitly retain the allowlisted source files for the protected owner ZIP.
  // They are server files, not public assets; .env and runtime data are excluded.
  outputFileTracingIncludes: {
    "/api/admin/publishing/source": [
      "./src/**/*", "./scripts/**/*", "./public/**/*", "./drizzle/**/*",
      "./package.json", "./package-lock.json", "./tsconfig.json", "./next-env.d.ts",
      "./next.config.ts", "./postcss.config.mjs", "./eslint.config.mjs", "./drizzle.config.ts",
      "./.env.example", "./.gitignore", "./.nvmrc", "./PROJECT-FILES.json", "./README.md", "./START-HERE.html", "./DEPLOYMENT-AR.md", "./AUDIT-REPORT-AR.md",
    ],
  },
};

export default nextConfig;

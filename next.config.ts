import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "clinik-optimal.vercel.app",
          },
        ],
        destination: "https://www.optimalphysiotherapyclinic.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
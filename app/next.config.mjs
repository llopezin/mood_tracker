/** @type {import('next').NextConfig} */

import cookieNames from "./cookieNames.mjs"


const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        missing: [
          {
            type: "cookie",
            key: cookieNames.token,
          },
        ],
        permanent: false,
        destination: "/login",
      },
      {
        source: "/login",
        has: [
          {
            type: "cookie",
            key: cookieNames.token,
          },
        ],
        permanent: false,
        destination: "/",
      },
      {
        source: "/sign-up",
        has: [
          {
            type: "cookie",
            key: cookieNames.token,
          },
        ],
        permanent: false,
        destination: "/",
      },
    ];
  },
};

export default nextConfig;

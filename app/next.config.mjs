/** @type {import('next').NextConfig} */

import cookieNames from "./src/utils/cookie/cookieNames.mjs"


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
        source: "/signup",
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
        source: "/registry",
        missing: [
          {
            type: "cookie",
            key: cookieNames.token,
          },
        ],
        permanent: false,
        destination: "/login",
      },
    ];
  },
};

export default nextConfig;

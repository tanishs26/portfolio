import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname:'plus.unsplash.com'
      }
    ]
  }
};

export default nextConfig;

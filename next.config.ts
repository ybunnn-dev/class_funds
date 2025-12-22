import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    // @ts-expect-error - Hiding the indicator despite strict types
    buildActivity: false,
    appIsrStatus: false, 
  },
};

export default nextConfig;
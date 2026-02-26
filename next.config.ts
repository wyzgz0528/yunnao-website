import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 启用严格模式
  reactStrictMode: true,

  // 压缩
  compress: true,

  // 图片优化
  images: {
    domains: ['cloudbraintech.cn', 'www.cloudbraintech.cn'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;

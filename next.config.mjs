/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: ['genkit', '@genkit-ai/google-genai'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

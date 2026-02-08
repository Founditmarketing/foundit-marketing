/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: ['genkit', '@genkit-ai/google-genai'],
  },
};

export default nextConfig;

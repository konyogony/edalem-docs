/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'mdx'],
    // Optionally, add any other Next.js config below
    reactStrictMode: true,
    serverExternalPackages: ['@shikijs/twoslash'],
};

export default nextConfig;

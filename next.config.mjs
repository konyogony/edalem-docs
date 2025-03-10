/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    pageExtensions: ['ts', 'tsx'],
    // Optionally, add any other Next.js config below
    reactStrictMode: true,
    serverExternalPackages: ['@shikijs/twoslash'],
};

export default nextConfig;

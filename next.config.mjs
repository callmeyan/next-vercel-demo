/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'standalone',
    env: {
        customKey: 'my-value',
    },
}

export default nextConfig;
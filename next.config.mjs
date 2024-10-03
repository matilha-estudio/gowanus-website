/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'gowanuswharf.wpenginepowered.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;

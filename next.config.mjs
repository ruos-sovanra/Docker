/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                pathname: '/img/*',
            },
            {
                protocol: 'https',
                hostname: 'wallpapers.com',
                pathname: '/images/*',
            },
        ],
    },
};

export default nextConfig;

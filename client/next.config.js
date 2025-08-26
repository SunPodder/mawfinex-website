module.exports = {
    reactStrictMode: true,
    output: 'standalone',
    
    // API rewrites for development and production
    async rewrites() {
        // In production with docker-compose, API calls go to the same domain
        // In development, they need to be proxied to the Express server
        if (process.env.NODE_ENV === 'development') {
            return [
                {
                    source: '/api/:path*',
                    destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/:path*`,
                },
            ]
        }
        return []
    },
}

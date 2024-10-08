/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost','13.127.50.182','dummyimage.com'],
        // remotePatterns: [
        //   {
        //     protocol: 'https',
        //     hostname: 'dummyimage.com',
        //     port: '',
        //     pathname: '/*',
        //   },
        //   {
        //     protocol: 'http',
        //     hostname: '13.127.50.182',
        //     // port: '5000',
        //     pathname: '/*',
        //   },
        // ],
      },
};

export default nextConfig;

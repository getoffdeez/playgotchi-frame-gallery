/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
      return [
        {
          source: '/playgotchi',
          destination: 'https://playgotchi.com',
          permanent: false
        },
        {
          source: '/learn',
          destination: 'https://x.com/playgotchi',
          permanent: false
        }
      ]
    }
  };
  
  export default nextConfig;
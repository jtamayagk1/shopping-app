/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'s.gravatar.com',
        port: '',
        pathname: '/avatar/**',
      },
      {
        protocol:'https',
        hostname:'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol:'https',
        hostname:'shopping-app-nextjs-project-jt.s3.amazonaws.com',
        port: '',
        pathname: '/items-images/**',
      }
    ]
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // images: {
  //   unoptimized: true,
  // },
  // assetPrefix: '/',
  images: {
    loader: "custom", //added new line
    loaderFile: './ImageLoader.js', //added new line
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;

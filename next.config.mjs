/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  
  images: {
    unoptimized: true,
  },
  swcMinify: false,
  experimental: {
    workerThreads: false,
    cpus: 1
  }
}
export default nextConfig;

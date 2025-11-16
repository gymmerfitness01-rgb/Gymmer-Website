/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  onDemandEntries: {
    // Prevent showing red screen for slow refresh
    maxInactiveAge: 1000 * 60 * 60,
  },
}



export default nextConfig

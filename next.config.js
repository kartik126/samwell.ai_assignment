/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]],
  images: {
    domains: ['ui-avatars.com'],
  },
}

module.exports = nextConfig

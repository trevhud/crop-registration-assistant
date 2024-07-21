/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
]

const nextConfig = {
  reactStrictMode: true,
  // generateViewport: () => ({
  //   viewport: 'width=device-width, initial-scale=1',
  // }),
  // webpack: function(config) {
  //   config.module.rules.push({
  //     test: /\.md$/,
  //     use: 'raw-loader',
  //   })
  //   return config
  // },
  // env: {
  //   siteTitle: 'Whisper API Sample App',
  // },
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: securityHeaders,
  //     }
  //   ]
  // },
  // serverRuntimeConfig: {
  //   PROJECT_ROOT: __dirname,
  // },
  // trailingSlash: true
};

module.exports = nextConfig;
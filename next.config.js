/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
]

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
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
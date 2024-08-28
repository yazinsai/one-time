/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,  // Add this line
  redirects: async () => {
    return [
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'id',
          },
        ],
        destination: '/success?id=:id',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
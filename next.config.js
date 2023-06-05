/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const { withSuperjson } = require("next-superjson");

module.exports = withSuperjson()({
  reactStrictMode: true,
});

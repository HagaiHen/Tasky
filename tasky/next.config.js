/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

require('dotenv').config();

module.exports = {
  env: {
    API_KEY: process.env.apiKey,
    AUTH_DOMAIN: process.env.authDomain,
    PROJECT_ID: process.env.projectId,
    STORAGE_BUCKET: process.env.storageBucket,
    MESSAGING_SENDER_ID: process.env.messagingSenderId,
    APP_ID: process.env.appId,
    SERVER: process.env.SERVER
  }
};
// /home/ubuntu/GJ-BOT-2025/ecosystem.config.js
module.exports = {
  apps : [{
    name: 'gj-bot',
    script: 'app.js',
    cwd: '/home/ubuntu/GJ-BOT-2025', // Explicitly set the current working directory
    // Optional: Enable watch mode for development (disable for production)
    // watch: true,
    // ignore_watch: ["node_modules", "base-baileys-memory"], // Ignore session data from watch
    // env: {
    //   NODE_ENV: "development",
    // },
    // env_production: {
    //   NODE_ENV: "production",
    // }
  }]
};
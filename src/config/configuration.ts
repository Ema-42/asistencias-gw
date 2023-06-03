export default () => ({
  port: parseInt(process.env.ENV_PORT, 10) || 3000,
  database: {
    host: process.env.ENV_DB_URI,
  },
});

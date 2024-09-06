module.exports = {
    development: {
      username: process.env.DB_USERNAME || 'default_username',
      password: process.env.DB_PASSWORD || 'default_password',
      database: process.env.DB || 'default_database',
      host: process.env.HOST || '127.0.0.1',
      dialect: 'mysql',
    },
    production: {
      use_env_variable: 'DATABASE_URL',
      dialect: 'postgres',
    },
  };
  
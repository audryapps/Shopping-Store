

const {dbDriver,postgres_user, postgres_password, postgres_host, postgres_port, postgres_db } = require('../config/config')

const USER = encodeURIComponent(postgres_user);
const PASSWORD = encodeURIComponent(postgres_password);

const URI = `${dbDriver}://${USER}:${PASSWORD}@${postgres_host}:${postgres_port}/${postgres_db}`;

module.exports = {
  development: {
    username: 'manu',
    password: 'manu123',
    database: 'store-db',
    URL: URI,
    dialect: 'postgres',
  },
  production: {
    username: postgres_user,
    password: postgres_password,
    database: 'store-db',
    URL: URI,
    dialect: 'postgres',
  },
};



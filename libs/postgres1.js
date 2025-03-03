const  { Pool } = require('pg');

const {postgres_user, postgres_password, postgres_host, postgres_port, postgres_db} = require ('../config/config');

const USER = encodeURIComponent(postgres_user);
const PASSWORD = encodeURIComponent(postgres_password);


const URI = `postgres://${USER}:${PASSWORD}@${postgres_host}:${postgres_port}/${postgres_db}`;

const pool = new Pool({connectionString: URI});
    
module.exports = pool;
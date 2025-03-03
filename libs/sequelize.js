const { Sequelize } = require('sequelize');

const {postgres_user, postgres_password, postgres_host, postgres_port, postgres_db} = require ('../config/config');
const setupModels = require ('./../db/models')

const USER = encodeURIComponent(postgres_user);
const PASSWORD = encodeURIComponent(postgres_password);


const URI = `postgres://${USER}:${PASSWORD}@${postgres_host}:${postgres_port}/${postgres_db}`;

const sequelize =new Sequelize(URI,{
    dialect: 'postgres',
    logging:(msg)=> {
        console.log('Mi custom log:', msg);
    }
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
const { Sequelize } = require('sequelize');

//const {dbDriver} = require('../config/config')//,mysql_user, mysql_password, mysql_host, mysql_port, mysql_db } = require('../config/config')
const setupModels = require('./../db/models')

//const USER = encodeURIComponent(mysql_user);
//const PASSWORD = encodeURIComponent(mysql_password);


//const URI = `${dbDriver}://${USER}:${PASSWORD}@${mysql_host}:${mysql_port}/${mysql_db}`;

const {dbDriver,postgres_user, postgres_password, postgres_host, postgres_port, postgres_db, node_env} = require ('../config/config');

const USER = encodeURIComponent(postgres_user);
const PASSWORD = encodeURIComponent(postgres_password);


const URI = `${dbDriver}://${USER}:${PASSWORD}@${postgres_host}:${postgres_port}/${postgres_db}`;

const sequelize = new Sequelize(URI, {
    mode:node_env,
    dialect: 'postgres',
    logging: (msg) => {
        // eslint-disable-next-line no-console
        console.log('Mi custom log:', msg);
    }
});

setupModels(sequelize);

//sequelize.sync(); //para sinconizar la data

module.exports = sequelize;
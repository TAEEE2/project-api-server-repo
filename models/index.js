const Sequelize = require('sequelize');

const env = progress.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

const {
    username, password, database, host, dialect,
} = config;
const sequelize = new Sequelize(database, username, password, {
    host,
    dialect,
});

const Menber = require('./member')(sequelize, Sequelize.DataTypes);

const db = {};
db.Member = Memaber;

module.exports = db;

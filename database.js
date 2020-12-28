const sequelize = require('sequelize')

const db = new sequelize('yourDatabaseName', 'yourUsername', 'yourPassword', {
	dialect: 'mysql'
})

db.sync;

module.exports = db;

const Sequelize = require('sequelize');
const database = require('./db');

const Profession = database.define('profession', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Profession;
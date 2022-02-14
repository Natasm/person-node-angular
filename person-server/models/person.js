const Sequelize = require('sequelize');
const database = require('./db');
const Profession = require('./profession');

const Person = database.define('person', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Person.belongsTo(Profession, { foreignKey: 'profession_id', allowNull: true });

//Person.sync();

module.exports = Person;
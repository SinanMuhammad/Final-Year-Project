const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'messages',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING
        },
        message: {
            type: Sequelize.TEXT
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }
)
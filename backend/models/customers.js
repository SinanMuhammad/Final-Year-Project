const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'customers',
    {
        email: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
        timestamps: false
    }
)
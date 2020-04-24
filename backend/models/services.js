const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'services',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING
        },
        seo: {
            type: Sequelize.BOOLEAN
        },
        smm: {
            type: Sequelize.BOOLEAN
        },
        ppc: {
            type: Sequelize.BOOLEAN
        },
        sem: {
            type: Sequelize.BOOLEAN
        },
        email_marketing: {
            type: Sequelize.BOOLEAN
        },
        web_dev: {
            type: Sequelize.BOOLEAN
        },
        branding: {
            type: Sequelize.BOOLEAN
        },
        seller_support: {
            type: Sequelize.BOOLEAN
        },
        remarketing: {
            type: Sequelize.BOOLEAN
        },
        e_commerce: {
            type: Sequelize.BOOLEAN
        },
        content_marketing: {
            type: Sequelize.BOOLEAN
        },
        analytics: {
            type: Sequelize.BOOLEAN
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
        timestamps: false
    }
)
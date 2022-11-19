const sequelize = require("sequelize");
const db = require("../Config/db");
const User = db.define(
    "tbuser",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
        },
        name: {
            type: sequelize.STRING,
        },
        image: {
            type: sequelize.BLOB,
        },
        isalert: {
            type: sequelize.BOOLEAN,
        }

    },
    { freezeTableName: true, timestamps: false }
);
module.exports = User
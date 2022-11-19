const sequelize = require('sequelize');
var reconnectOptions = {
    max_retries: 999,
    onRetry: function (count) {
        console.log("connection lost, trying to reconnect (" + count + ")");
    }
};
const db = new sequelize("SIDB", "sa", "@1p2m3g4", {
    host: "192.168.1.100",
    port: 1433,
    dialect: "mssql",
    dialectOptions: {
        options: {
            instanceName: "BCDB",
            trustServerCertificate: true,
            requestTimeout: 500000
        }
    },
    autoreconnect: true,
    reconnect: reconnectOptions,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 0,
        requestTimeout: 0
    },
});

db.authenticate()
    .then(() => console.log('datebase Connected!'))
    .catch((err) => console.log("Can not connect to database" + err));

module.exports = db;
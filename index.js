const express = require("express");
const app = express();
const connectDB = require("./Config/db");
const http = require('https');

app.use(express.json());

const user = require("./Route/user")
app.use("/api/v1/user", user);
app.use("/uploads", express.static("uploads"))

const server = app.listen(8080, () => { });
server.setTimeout(500000);

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
    //Closer server and exit process
    server.close(() => process.exit(1));
});

module.exports = app;

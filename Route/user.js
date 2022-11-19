const express = require("express");
const route = express.Router();
const controller = require("../Controller/user");

route.route("/getUser").get(controller.getUser);
route.route("/insertUser").post(controller.addUser);
route.route("/updateUser/:id").put(controller.updateUser);
route.route("/deleteUser/:id").delete(controller.deleteUser);
route.route("/updateUserAlert").post(controller.updateUserAlert);
module.exports = route
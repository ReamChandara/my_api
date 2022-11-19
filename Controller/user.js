const User = require("../models/user")
const sequelize = require("sequelize");
const AsyncHandler = require("../Middleware/async");
const { json, where } = require("sequelize");
const asyncHandler = require("../Middleware/async");


exports.getUser = AsyncHandler(async (req, res) => {
    const users = await User.findAll().then(
        async (user) => {
            var list = { users: user }
            res.status(200).send(JSON.stringify(list))
        }
    );
});

exports.addUser = AsyncHandler(async (req, res) => {
    var json = req.body;
    console.log(json)
    const users = await User.create({
        id: json["id"],
        name: json["name"],
        isalert: json["isalert"]
    });
    res.status(200).send("insert sussec!")
});

exports.updateUser = AsyncHandler(async (req, res) => {
    var json = req.body;
    let id = req.params.id;
    console.log('id get from param , ', id);
    await User.update(
        {
            id: json["id"],
            name: json["name"],
            isalert: json["isalert"]
        },
        {
            where: {
                id: id,
            }
        }
    )
    res.status(200).send("update complate!");
});

exports.updateUserAlert = AsyncHandler(async (req, res) => {

    await User.update(
        {
            isalert: true
        },
        {
            where: {
                id: [1, 4]
            }
        },
    );
    res.status(200).send("update complate!");
})

exports.deleteUser = asyncHandler(async (req, res) => {
    var id = req.params.id;
    await User.destroy(
        {
            where: {
                id: id,
            }
        }
    );
    res.status(200).send("delete complate!");
})
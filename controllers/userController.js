const User = require("../models/User");

exports.registerUser = async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        await newUser.save();
        res.redirect("/");
    } catch (err) {

        res.status(500).send(err.message);
    };
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.render("users", {users});
    } catch (err) {
        res.status(500).send(err.message);
    };
};
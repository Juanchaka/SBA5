const User = require("../models/User");

exports.registerUser = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const newUser = new User({username, email, password});
        await newUser.save();
        res.redirect("/users")
    } catch (err) {

        res.status(500).send(err.message);
    };
};
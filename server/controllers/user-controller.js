"use strict";

const UserData = require("../data").users;

function getProfile(req, res) {
    let user = req.user;

    return res.render("users/user-profile", {
        user: user
    }); 
}

module.exports = {
    getProfile
};
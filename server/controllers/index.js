"use strict";

const controllers = {
    home: require("./home-controller"),
    auth: require("./auth-controller"),
    user: require("./user-controller"),
    pet: require("./pet-controller")
};

module.exports = controllers;
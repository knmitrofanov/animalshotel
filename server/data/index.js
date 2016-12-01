"use strict";

const models = require('./models');

const data = {
    users: require("./user-data")({ user: models.user }),
    pet: require("./pet-data")({ pet: models.pet })//TODO
};

module.exports = data;
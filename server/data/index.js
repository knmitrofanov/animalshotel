"use strict";

const models = require('./models');

const data = {
    users: require("./user-data")({ user: models.user }),
    // pet: require("./models/pet-data")({ city: models.pet })//TODO
};

module.exports = data;
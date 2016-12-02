"use strict";

const models = require('./models');

const data = {
    users: require("./user-data")({ user: models.user }),
    pet: require("./pet-data")({ pet: models.pet }),//TODO
    hotel: require("./hotel-data")({ hotel: models.hotel}),
    service: require("./service-data")({service: models.service})
};

module.exports = data;
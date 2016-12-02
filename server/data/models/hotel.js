"use strict"

const mongoose = require("mongoose");
const breeds = require("./breeds");

const Schema = require.Schema;

const hotelSchema = mongoose.Schema({
    name: { type: String, required: true },
    owner: { type: String, required: true },
    address: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    species: { type: String , enum: breeds.petsSpecies, require: true },
    services: []
});

const Hotel = mongoose.model("hotel", hotelSchema);
module.exports = Hotel;
"use strict"

const mongoose = require("mongoose");

const Schema = require.Schema;

const hotelSchema = mongoose.Schema({
    name: { type: String, required: true },
    owner: { type: String, required: true }
});

const Hotel = mongoose.model("hotel", hotelSchema);
module.exports = Hotel;
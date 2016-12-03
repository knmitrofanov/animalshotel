"use strict"

const mongoose = require("mongoose");

const Schema = require.Schema;

const serviceSchema = mongoose.Schema({
    name: { type: String, required: true },
    detailedInfo: { type: String, required: true },
    hotelId: { type: String, required: true },
    isPerDay: {type: Boolean, required: true},
    price: {type: Number, required: true},
});

const Service = mongoose.model("service", serviceSchema);
module.exports = Service;
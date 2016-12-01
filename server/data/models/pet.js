"use strict";

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const breeds = require("./breeds");

const petSchema = mongoose.Schema({
    name: { type: String, required: true },
    owner: { type: String, required: true },
    weight: { type: String, required: true },
    sex: { type: String, enum: ["male", "female"] , required: true },
    breed: { type: String, enum: breeds.all, required: true },
    species: { type: String , enum: breeds.petsSpecies, require: true },
    age: { type: Number, require: true },
    isInMonts: { type: Boolean, require: true, default: false}
});

// petSchema.methods.breedsData = function callBreeds () {
//   const breedsDataRes = require("./breeds");
//   return breedsDataRes;
// };

const Pet = mongoose.model("pet", petSchema);
module.exports = Pet;

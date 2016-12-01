"use strict";

const DogsInfo = require('./dogs');
const CatsInfo = require('./cats');

const breeds = {
    petsSpecies: ['dogs', 'cats'],
    dogs: DogsInfo.names,
    cats: CatsInfo.names,
    all: DogsInfo.names.concat(CatsInfo.names)
};

module.exports = breeds;
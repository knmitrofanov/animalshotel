"use strict";

const DogsInfo = require('./dogs');
const CatsInfo = require('./cats');

const breeds = {
    petsSpecies: ['dogs', 'cats'],
    dogs: DogsInfo,
    cats: CatsInfo
    // all: DogsInfo.names.concat(CatsInfo.names)
};

module.exports = breeds;
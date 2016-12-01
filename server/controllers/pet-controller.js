"use strict";

const PetData = require("../data").pet;
const UserData = require("../data").users;
const breedsData = require("../data/models/breeds");

function loadRegisterPage(req, res) {
	var user = req.user;
	res.render("pet/register", {
		breeds: breedsData, 
		user: user
	});
}

function registerPet(req, res) {
	const body = req.body;
	var user = req.user;
		
	let newPetData = {
		name: body.name,
		owner: user._id,
		weight: body.weight,
		sex: body.sex,
		breed: body.breed,
		species: body.species,
		age: body.age
	};

	PetData
		.createPet(newPetData)
		.then(() => {
			//TODO:redirect somewhere
			res.send(JSON.stringify(newPetData));
		})
		.catch(() => {
			res.status(500);
			res.send("Registration failed");
			res.end();
		});
	//TODO: Update user (add new pet to his list pets)

}



module.exports = { 
	loadRegisterPage, 
	registerPet,
};
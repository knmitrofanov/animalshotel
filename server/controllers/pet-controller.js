"use strict";

const PetData = require("../data").pet;
const UserData = require("../data").users;
const breedsData = require("../data/models/breeds");

function loadRegisterPage(req, res) {
	if(!req.isAuthenticated()){
		return res.redirect("../auth/login");
	}
	var user = req.user;
	res.render("pet/register", {
		breeds: breedsData, 
		user: user
	});
}

function getAllPets(req, res) {
	PetData.getAllPets()
		.then(pets => {
			return res.render("pet/list", {
				model: pets,
				user: req.user
				//result: pets
			});
		})
		.catch(err => {
			res.status(400);
			res.send("Cannot list all pets");
			res.end();
		});
}

function registerPet(req, res) {
	if(!req.isAuthenticated()){
		return res.redirect("../auth/login");
	}
	const body = req.body;
	var user = req.user;
		
	let newPetData = {
		name: body.name,
		owner: user._id,
		weight: body.weight,
		sex: body.sex,
		breed: body.breed,
		// species: body.species,
		age: body.age
	};
	console.log(PetData);
	console.log(newPetData);
	PetData
		.create(newPetData)
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
	getAllPets,
};
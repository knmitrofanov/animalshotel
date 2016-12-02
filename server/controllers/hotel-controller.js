"use strict";

const HotelData = require("../data").hotel;
const UserData = require("../data").users;
const breedsData = require("../data/models/breeds");

function loadRegisterPage(req, res) {
	if(!req.isAuthenticated()){
		return res.redirect("../auth/login");
	}
	var user = req.user;
	res.render("hotel/register", {
		breeds: breedsData,
		user: user
	});
}

function registerHotel(req, res) {
	if(!req.isAuthenticated()){
		return res.redirect("../auth/login");
	}
	const body = req.body;
	var user = req.user;
		
	let newHotelData = {
		name: body.name,
		owner: user._id,
        address: body.address,
        phoneNumber: body.phoneNumber,
        species: body.species
	};

	HotelData
		.createHotel(newHotelData)
		.then(() => {
			//TODO:redirect somewhere
			res.send(JSON.stringify(newHotelData));
		})
		.catch((err) => {
			res.status(500);
			res.send(500, "Registration failed\r\n");
			res.end();
		});
	//TODO: Update user (add new hotel to his list hotels)
}

module.exports = { 
	loadRegisterPage, 
	registerHotel,
};

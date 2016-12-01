"use strict";

const HotelData = require("../data").hotel;
const UserData = require("../data").users;

function loadRegisterPage(req, res) {
	res.render("hotel/register");
}

function registerHotel(req, res) {
	const body = req.body;
	var user = req.user;
		
	let newHotelData = {
		name: body.name,
		owner: body.owner,
	};

	HotelData
		.createHotel(newHotelData)
		.then(() => {
			//TODO:redirect somewhere
			res.send(JSON.stringify(newHotelData));
		})
		.catch(() => {
			res.status(500);
			res.send("Registration failed");
			res.end();
		});
	//TODO: Update user (add new hotel to his list hotels)
}



module.exports = { 
	loadRegisterPage, 
	registerHotel,
};
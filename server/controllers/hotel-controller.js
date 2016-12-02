"use strict";

const ServiceData = require("../data").service;
const HotelData = require("../data").hotel;
const UserData = require("../data").users;
const breedsData = require("../data/models/breeds");

function loadRegisterPage(req, res) {
    if (!req.isAuthenticated()) {
        return res.redirect("../auth/login");
    }
    var user = req.user;
    res.render("hotel/register", {
        breeds: breedsData,
        user: user
    });
}

function loadHotelAddServicePage(req, res) {
	var user = req.user;
	var hotel = req.hotel;
	res.render("hotel/add-service", {
		user: user
	});
}

function registerHotel(req, res) {
    if (!req.isAuthenticated()) {
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
            res.redirect("/");
        })
        .catch((err) => {
            res.status(500);
            res.send(500, "Registration failed\r\n");
            res.end();
        });
    //TODO: Update user (add new hotel to his list hotels)
}

function registerService(req, res) {
	if(!req.isAuthenticated()){
		return res.redirect("../auth/login");
	}
	const body = req.body;
	var user = req.user;
	//var hotel = req.hotel;
		
	let newServiceData = {
		name: body.name,
		hotelId: user._id,
		price: body.price,
		isPerDay: body.isPerDay
	};

	ServiceData
		.createService(newServiceData)
		.then(() => {
			//TODO:redirect somewhere
			res.send(JSON.stringify(newServiceData));
		})
		.catch((err) => {
			res.status(500);
            //now it is commented not to stop the server
			//res.send(500, "Registration failed\r\n");
			res.end();
		});
	//TODO: Update user (add new hotel to his list hotels)
}

module.exports = {
    loadRegisterPage,
    loadHotelAddServicePage,
    registerHotel,
    registerService,
};
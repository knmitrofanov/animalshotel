/*globals require module Promise*/
"use strict";

module.exports = function (models) {
    let Hotel = models.hotel

    return {
        getHotelById(id) {
           return new Promise(function(resolve, reject) {
				Hotel.findOne({ "_id": id }, function(err, result) {
					if (err) {
						return reject(err);
					}

					return resolve(result);
				});
			});
        },
        getAll() {
			return new Promise(function(resolve, reject) {
				Hotel.find(function(err, result) {
						if (err) {
							return reject(err);
						}
						return resolve(result);
					});
			});
		},
        create(data) {
			return new Promise((resolve, reject) => {
				let hotel = new Hotel ({
					name: data.name,
					owner: data.owner,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    species: data.species
				});

				hotel.save((err, createdHotel) => {
					if (err) {
						return reject(err);
					}

					return resolve(createdHotel);
				});
			});
		},
		update(id, update, options) {
		    return new Promise((resolve, reject) => {
		        Hotel.findOneAndUpdate({ "_id": id }, update,
		            (err, hotel) => {
		                if (err) {
		                    return reject(err);
		                }

		                return resolve(hotel);
		            });
		    });
		}
    }
}
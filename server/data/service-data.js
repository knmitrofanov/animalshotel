/* globals require module Promise*/
"use strict";

module.exports = function(models) {
	let Service = models.service

	return {
		getById(id) {
			return new Promise(function(resolve, reject) {
				Service.findOne({ "_id": id }, function(err, result) {
					if (err) {
						return reject(err);
					}

					return resolve(result);
				});
			});
		},
		getAll() {
			return new Promise(function(resolve, reject) {
				Service.find(function(err, result) {
						if (err) {
							return reject(err);
						}
						return resolve(result);
					});
			});
		},
		create(data) {
			return new Promise((resolve, reject) => {
				let service = new Service ({
					name: data.name,
					detailedInfo: data.detailedInfo,
                    hotelId: data.hotelId,
                    price: data.price,
                    isPerDay: data.isPerDay
				});

				service.save((err, createdService) => {
					if (err) {
						return reject(err);
					}

					return resolve(createdService);
				});
			});
		},
	};
};
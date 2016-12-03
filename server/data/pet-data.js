/* globals require module Promise*/
"use strict";

module.exports = function(models) {
	let Pet = models.pet

	return {
		breeds(){
			return Pet.breedsData;
		},
		getById(id) {
			return new Promise(function(resolve, reject) {
				Pet.findOne({ "_id": id }, function(err, result) {
					if (err) {
						return reject(err);
					}

					return resolve(result);
				});
			});
		},
		getAllPets() {
            return new Promise((resolve, reject) => {
                Pet.find((err, pets) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(pets);
                });
            });
        },
		// getPetByUsername(username) {
		// 	return new Promise(function(resolve, reject) {
		// 		User.findOne({ "username": username }, function(err, result) {
		// 			if (err) {
		// 				return reject(err);
		// 			}

		// 			return resolve(result);
		// 		});
		// 	});
		// },
		// getPetsByUsername(username) {
		// 	return new Promise(function(resolve, reject) {
		// 		User.findOne({ "username": username }, function(err, result) {
		// 			if (err) {
		// 				return reject(err);
		// 			}

		// 			return resolve(result);
		// 		});
		// 	});
		// },
		getPets() {
			return new Promise(function(resolve, reject) {
				Pet
					.find(function(err, result) {
						if (err) {
							return reject(err);
						}
						return resolve(result);
					});
			});
		},
		create(data) {
			return new Promise((resolve, reject) => {
				let pet = new Pet ({
					name: data.name,
					owner: data.owner,
					weight: data.weight,
					sex: data.sex,
					breed: data.breed,
					species: data.species,
					age: data.age
				});

				pet.save((err, createdPet) => {
					if (err) {
						return reject(err);
					}

					return resolve(createdPet);
				});
			});
		},
		// update(id, update, options) {
		//     return new Promise((resolve, reject) => {
		//         User.findOneAndUpdate({ "_id": id }, update,
		//             (err, user) => {
		//                 if (err) {
		//                     return reject(err);
		//                 }

		//                 return resolve(user);
		//             });
		//     });
		// }
	};
};
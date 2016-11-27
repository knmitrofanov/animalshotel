/* globals require module Promise*/
"use strict";

module.exports = function(models) {
	let User = models.user

	return {
		getUserById(id) {
			return new Promise(function(resolve, reject) {
				User.findOne({ "_id": id }, function(err, result) {
					if (err) {
						return reject(err);
					}

					return resolve(result);
				});
			});
		},
		getUserByUsername(username) {
			return new Promise(function(resolve, reject) {
				User.findOne({ "username": username }, function(err, result) {
					if (err) {
						return reject(err);
					}

					return resolve(result);
				});
			});
		},
		getAllUsers() {
			return new Promise(function(resolve, reject) {
				User
					.find(function(err, result) {
						if (err) {
							return reject(err);
						}
						return resolve(result);
					});
			});
		},
		createUser(newUserData) {
			return new Promise((resolve, reject) => {
				let user = new User ({
					username: newUserData.username,
					firstName: newUserData.firstName,
					lastName: newUserData.lastName,
					hashPass: newUserData.hashPass,
					salt: newUserData.salt,
					phoneNumber: newUserData.phoneNumber,
					email: newUserData.email,
					// roles: [],
					avatar: newUserData.avatar
				});

				user.save((err, createdUser) => {
					if (err) {
						return reject(err);
					}

					return resolve(createdUser);
				});
			});
		},
		// updateUser(id, update, options) {
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
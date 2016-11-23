let mongoose = require('mongoose'),
    encryption = require('../../utilities/encryption');

let requiredMessage = '{PATH} is required';
let defaultAvatar = 'https://ninjageisha.files.wordpress.com/2012/08/ninja-tadaa.jpg';

module.exports.init = function() {
    let userSchema = mongoose.Schema({
        username: { type: String, required: requiredMessage, unique: true },
        salt: String,
        hashPass: String,
        firstName: { type: String, required: requiredMessage},
        lastName: { type: String, required: requiredMessage},
        phoneNumber: String,
        email: { type: String, required: requiredMessage},
        initiatives: [{
            initiative: String,
            season: String
        }],
        avatar: { type: String, default: defaultAvatar }
    });

    userSchema.method({
        authenticate: function(password) {
            if (encryption.generateHashedPassword(this.salt, password) === this.hashPass) {
                return true;
            }
            else {
                return false;
            }
        }
    });

    let User = mongoose.model('User', userSchema);
};



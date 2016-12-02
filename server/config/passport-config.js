"use strict";

const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const UsersData = require('../data').users;

module.exports = {
    initializeLocalStrategy: function(){
        passport.use(
            new LocalStrategy(
                (username, password, done) => {
                    UsersData
                        .getByUsername(username)
                        .then((resultUser, err) => {
                            if (err) {
                                return done(err);
                            } else if (!resultUser) {
                                done(null, false, { message: "Incorrect credentials." });
                            } else if (!resultUser.authenticate(password)) {
                                done(null, false, { message: "Incorrect credentials." });
                            } else {
                                return done(null, resultUser);
                            }
                        });
                }));
    },
    setSerializationProcedure: function(){
        passport.serializeUser((user, done) => {
            done(null, user._id);
        });
    },
    setDeserializationProcedure: function(){
        passport.deserializeUser((id, done) => {
            UsersData.getById(id)
                .then((resultUser, err) =>{
                    done(err, resultUser);
                });
            });
    }
}
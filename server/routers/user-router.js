"use strict";

module.exports = {
    initializeUserRoutes: function(app, controllers){
        app.get("/auth/profile", controllers.user.getProfile);
    }
};
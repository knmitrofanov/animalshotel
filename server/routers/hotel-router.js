"use strict";

module.exports = {
    initializeHotelRoutes: function(app, controllers){
        app.get("/hotel/register", controllers.hotel.loadRegisterPage);

        app.post("/hotel/register", controllers.hotel.registerHotel);
    }
};
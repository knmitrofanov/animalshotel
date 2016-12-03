"use strict";

module.exports = {
    initializeHotelRoutes: function(app, controllers){
        app.get("/hotel/register", controllers.hotel.loadRegisterPage);
        app.get("/hotel/add-service", controllers.hotel.loadHotelAddServicePage);
        app.get("/hotels", controllers.hotel.getAllHotels);

        app.post("/hotel/register", controllers.hotel.registerHotel);
        app.post("/hotel/hotel/add-service", controllers.hotel.registerService)
    }
};
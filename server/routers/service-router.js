"use strict";

module.exports = {
    initializeServiceRoutes: function(app, controllers) {
        app.get("/service/register", controllers.service.loadRegisterPage);
        app.get("/services", controllers.service.getAllServices);
        app.post("/service/register", controllers.service.registerService);
    }
};
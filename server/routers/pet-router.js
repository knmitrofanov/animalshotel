"use strict";

module.exports = {
    initializePetRoutes: function(app, controllers){
        app.get("/pet/register", controllers.pet.loadRegisterPage);

        app.post("/pet/register", controllers.pet.registerPet);
        
    }
};
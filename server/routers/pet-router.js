"use strict";

module.exports = {
    initializePetRoutes: function(app, controllers){
        app.get("/pet/register", controllers.pet.loadRegisterPage);
        app.get("/pets", controllers.pet.getAllPets);
        app.get("/pets/:id", controllers.pet.getPetById);
        
        app.post("/pet/register", controllers.pet.registerPet);
    }
};
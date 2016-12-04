const express = require("express");
const config = require("./server/config");
// const userValidator = require("./server/utilities/user-validator");

const app = express();
const rootPath = config.rootPath;
config.setupConfigurations(app, rootPath);

const http = require("http").Server(app);

//require("./server/routers")(app, config, userValidator);

app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
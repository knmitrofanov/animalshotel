const express = require("express");
const config = require("./server/config");
// const userValidator = require("./server/utilities/user-validator");

const app = express();
const rootPath = config.rootPath;
config.setupConfigurations(app, rootPath);

const http = require("http").Server(app);

//require("./server/routers")(app, config, userValidator);

app.listen(config.port);
console.log("Server running on port: " + config.port);
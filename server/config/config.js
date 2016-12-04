let path = require('path');
let rootPath = path.normalize(__dirname + '/../../');

const connectionStrings = {
    production: 'mongodb://admin:123456@ds119548.mlab.com:19548/animalshotel',
    development: 'mongodb://localhost/animalshotel'
};

module.exports = {
    environment: process.env.NODE_ENV || "development",
    connectionString: connectionStrings[process.env.NODE_ENV || "development"],
    port: process.env.PORT || 3001,
    rootPath
};
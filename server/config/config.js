let path = require('path');
let rootPath = path.normalize(__dirname + '/../../');

const connectionStrings = {
    production: 'mongodb://admin:123456@ds119548.mlab.com:19548/animalshotel',
    development: 'mongodb://localhost:27017/animalshotel'
};

module.exports = {
    development: {
        rootPath: rootPath,
        db: connectionStrings.development,
        port: 3000
    },
    production: {
        rootPath: rootPath,
        db: connectionStrings.production,
        port: process.env.PORT || 3000
    }
};
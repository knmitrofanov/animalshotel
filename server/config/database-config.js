const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = {
    initializeConnection: function (config) {
        mongoose.connect(config.connectionString);
        let db = mongoose.connection;

        db.once('open', function(err) {
            if (err) {
                console.log('Database could not be opened: ' + err);
                return;
            }

            console.log('Database up and running...')
        });

        db.on('error', function(err){
            console.log('Database error: ' + err);
        });

    }
};
'use strict';
const config = require('./config');

const app = require('./app');

const server = app.listen(config.port, config.ip, () => {
    console.log('%s (%s) listening at http://%s:%s', config.serviceName, config.env, config.ip, config.port);
});

module.exports = {
    app
};

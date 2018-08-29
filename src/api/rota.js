const controller = require('../core/controller');

module.exports = (app) => {
    app.get('/', controller.a);
}


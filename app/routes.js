module.exports = (app) => {

    app.get('/', (request, response) => {
        let objController = require('../src/controllers/HomeController.js')
        objController.index(request, response)
    })

};

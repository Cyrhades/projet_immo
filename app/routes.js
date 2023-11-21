module.exports = (app) => {
    app.get('/', (request, response) => {
        let objController = require('../src/controllers/HomeController.js')
        objController.index(request, response)
    })


    app.get('/inscription', (request, response) => {
        let objController = require('../src/controllers/RegisterController.js')
        objController.index(request, response)
    })
    
    app.post('/inscription', (request, response) => {
        let objController = require('../src/controllers/RegisterController.js')
        objController.process(request, response)
    })


    app.get('/connexion', (request, response) => {
        let objController = require('../src/controllers/AuthenticationController.js')
        objController.index(request, response)
    })

    app.post('/connexion', (request, response) => {
        let objController = require('../src/controllers/AuthenticationController.js')
        objController.process(request, response)
    })

    app.get('/deconnexion', (request, response) => {
        let objController = require('../src/controllers/AuthenticationController.js')
        objController.deconnect(request, response)
    })
};

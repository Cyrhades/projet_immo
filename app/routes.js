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
};

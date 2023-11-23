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


    app.get('/admin', (request, response) => {
        let objController = require('../src/controllers/DashboardController.js')
        objController.index(request, response)
    })

    app.get('/admin/user', (request, response) => {
        let objController = require('../src/controllers/UserController.js')
        objController.index(request, response)
    })

    app.get('/admin/user/delete/:id([0-9]+)', (request, response) => {
        let objController = require('../src/controllers/UserController.js')
        objController.deleteUser(request, response)
    })

    app.get('/admin/user/edit/:id([0-9]+)', (request, response) => {
        let objController = require('../src/controllers/UserController.js')
        objController.editUser(request, response)
    })

    app.post('/admin/user/edit/:id([0-9]+)', (request, response) => {
        let objController = require('../src/controllers/UserController.js')
        objController.editUserProcess(request, response)
    })
};

class RegisterController {

    index (request, response) {
        response.render('register/index')
    }

};

module.exports = new RegisterController();
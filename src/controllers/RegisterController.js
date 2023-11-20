const User = require('../entity/User.js');
const UserRepository = require('../repository/UserRepository.js');
class RegisterController {

    index (request, response) {
        response.render('register/index')
    }

    process(request, response) {
        let entity = new User();
        entity.setEmail(request.body.email)
            .setPassword(request.body.password)
            .setCivility(request.body.civility)
            .setLastname(request.body.lastname)
            .setFirstname(request.body.firstname)
            .setPhone(request.body.phone)

        const UserRepo = new UserRepository();
        UserRepo.add(entity);

        response.render('register/index');
    }
};

module.exports = new RegisterController();
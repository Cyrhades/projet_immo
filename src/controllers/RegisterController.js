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
        UserRepo.existsEmail(entity.getEmail()).then(emailexists => {
            // console.log(emailexists);
            if(emailexists) {
                // on renvoi le formulaire avec une erreur
                response.render('register/index', {
                    error : `L'adresse Email existe déjà dans notre base de données.`
                });
            } else {
                // On enregistre en BDD
                UserRepo.add(entity);
            }
        })
    }
};

module.exports = new RegisterController();
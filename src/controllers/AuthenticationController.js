const UserRepository = require('../repository/UserRepository.js');
const bcrypt = require('bcryptjs');

class AuthenticationController {

    index (request, response) {
        response.render('authentication/index')
    }

    process (request, response) {
        // Etape 1 : récupérer les information de l'utilisateur (via son email)
        const UserRepo = new UserRepository();
        UserRepo.getUserByEmail(request.body.email).then(infosUser => {
            // Etape 2 : Vérifier si user existe
            if(infosUser) {
                // Etape 3 : Vérifier si mot de passe correct
                if(bcrypt.compareSync(request.body.password, infosUser.password)) {
                    request.flash("notify", "Vous êtes maintenant connecté.")
                    response.redirect('/');
                    return;
                }
            }
            response.render('authentication/index', {error : "Identifiants incorrects", email : request.body.email})
        }).catch((error) => {
            console.log(error)
        })
       
    }

};

module.exports = new AuthenticationController();
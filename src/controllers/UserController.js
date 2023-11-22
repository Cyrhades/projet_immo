const UserRepository = require("../repository/UserRepository.js");
class UserController {

    index (request, response) {
        const repo = new UserRepository();
        repo.getUsers().then((users) => {
            response.render('admin/user/index', {users})
        });
    }

    deleteUser (request, response) {
        console.log(request.params.id)
        response.send("Vous allez supprimer ici l'id : "+request.params.id)
    }


};

module.exports = new UserController();
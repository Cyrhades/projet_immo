const UserRepository = require("../repository/UserRepository.js");
class UserController {

    index (request, response) {
        const repo = new UserRepository();
        repo.getUsers().then((users) => {
            response.render('admin/user/index', {users})
        });
    }

    deleteUser (request, response) {
        const repo = new UserRepository();
        repo.deleteUser(request.params.id).then(() => {
            request.flash("notify", "L'utilisateur a bien été supprimé.")
            response.redirect("/admin/user");
        })
    }


};

module.exports = new UserController();
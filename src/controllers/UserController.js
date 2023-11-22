const UserRepository = require("../repository/UserRepository.js");
class UserController {

    index (request, response) {
        const repo = new UserRepository();
        repo.getUsers().then((users) => {
            response.render('admin/user/index', {users})
        });
    }

};

module.exports = new UserController();
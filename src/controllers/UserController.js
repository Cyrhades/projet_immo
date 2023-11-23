const User = require('../entity/User.js');
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


    editUser (request, response) {
        const repo = new UserRepository();
        repo.getUserById(request.params.id).then((user) => {
            response.render('admin/user/edit', {user})
        });
    }

    editUserProcess (request, response) {
        let entity = new User();
        entity.setEmail(request.body.email)            
            .setCivility(request.body.civility)
            .setLastname(request.body.lastname)
            .setFirstname(request.body.firstname)
            .setPhone(request.body.phone)

        // Les champs non modifiable
        delete entity.id;    
        delete entity.password;    

        const repo = new UserRepository();
        repo.getUserById(request.params.id).then(async (user) => {
            if(user.email !== entity.email) {
                await repo.existsEmail(entity.getEmail()).then(emailexists => {
                    if(emailexists) {
                        response.render(
                            'admin/user/edit', 
                            {error: "Un autre utilisateur a déjà cet email",user: entity}
                        );
                        return;
                    }
                }).catch(() => {
                    response.render(
                        'admin/user/edit', 
                        {error: "Un autre utilisateur a déjà cet email",user: entity}
                    );
                    return;
                });

                // 
                console.log('ici')
            } 
            // Si email pas en doublon ou toujours le même
            repo.update(request.params.id, entity).then(() => {
                request.flash("notify","L'utilisateur a bien été modifié");
                response.redirect("/admin/user")
            });
        });
    }

};

module.exports = new UserController();
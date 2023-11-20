const con = require('../../app/database_sql.js');
module.exports = class UserRepository {

    add(user) {
        con.promise().query('INSERT INTO `users` SET ?', user).then(() => {
    
        }).catch((error) => { console.log(error) });
    }

};
const con = require('../../app/database_sql.js');
module.exports = class UserRepository {

    async add(user) {
        await con.promise().query('INSERT INTO `users` SET ?', user);
    }

};
const con = require('../../app/database_sql.js');
module.exports = class UserRepository {

    async add(user) {
        await con.promise().query('INSERT INTO `users` SET ?', user);
    }

    async existsEmail(email) {
        return await con.promise().query('SELECT * FROM `users` WHERE ?', { email }).then((result) => { 
            return (result[0].length > 0);
        });
    }

    
    async getUserById(id) {
        return await con.promise().query('SELECT * FROM `users` WHERE ?', { id }).then((result) => { 
            return (result[0].length > 0 ? result[0][0] : null);
        });
    }

    async getUserByEmail(email) {
        return await con.promise().query('SELECT * FROM `users` WHERE ?', { email }).then((result) => { 
            return (result[0].length > 0 ? result[0][0] : null);
        });
    }
    
    async getUsers() {
        return await con.promise().query('SELECT * FROM `users`').then((result) => { 
            return (result[0].length > 0 ? result[0] : null);
        });
    }

    async deleteUser(id) {
        return await con.promise().query('DELETE FROM `users` WHERE ?', { id });
    }
    
    async update(id, user) {
        
        return await con.promise().query('UPDATE `users` SET ? WHERE ?', [user, {id}] );
    }
};
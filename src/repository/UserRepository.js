const con = require('../../app/database_sql.js');
module.exports = class UserRepository {

    async add(user) {
        return await con.promise().query('INSERT INTO `user` SET ?', user);
    }

    async existsEmail(email) {
        return await con.promise().query('SELECT * FROM `user` WHERE ?', { email }).then((result) => { 
            return (result[0].length > 0);
        });
    }

    
    async getUserById(id) {
        return await con.promise().query('SELECT * FROM `user` WHERE ?', { id }).then((result) => { 
            return (result[0].length > 0 ? result[0][0] : null);
        });
    }

    async getUserByEmail(email) {
        return await con.promise().query('SELECT * FROM `user` WHERE ?', { email }).then((result) => { 
            return (result[0].length > 0 ? result[0][0] : null);
        });
    }
    
    async getuser() {
        return await con.promise().query('SELECT * FROM `user`').then((result) => { 
            return (result[0].length > 0 ? result[0] : null);
        });
    }

    async deleteUser(id) {
        return await con.promise().query('DELETE FROM `user` WHERE ?', { id });
    }
    
    async update(id, user) {
        return await con.promise().query('UPDATE `user` SET ? WHERE ?', [user, {id}] );
    }
};
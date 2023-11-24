const con = require('../../app/database_sql.js');
module.exports = class ContactRepository {

    async add(contact) {
        return await con.promise().query('INSERT INTO `contact` SET ?', contact);
    }
};
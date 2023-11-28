const con = require('../../app/database_sql.js');
module.exports = class ContactRepository {

    async add(contact) {
        return await con.promise().query('INSERT INTO `contact` SET ?', contact);
    }

    async deleteContact(id) {
        return await con.promise().query('DELETE FROM `contact` WHERE ?', { id });
    }

    async update(id, contact) {
        return await con.promise().query('UPDATE `contact` SET ? WHERE ?', [contact, {id}] );
    }
};
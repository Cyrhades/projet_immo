const con = require('../../app/database_sql.js');
module.exports = class RealtyRepository {

    async add(realty) {
        return await con.promise().query('INSERT INTO `realty` SET ?', realty);
    }
};
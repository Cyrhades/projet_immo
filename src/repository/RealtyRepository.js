const con = require('../../app/database_sql.js');
module.exports = class RealtyRepository {

    async add(realty) {
        return await con.promise().query('INSERT INTO `realty` SET ?', realty);
    }

        
    async getRealtyById(id) {
        return await con.promise().query('SELECT *, `realty`.`id` AS `id` FROM `realty` INNER JOIN `contact` ON `realty`.`id_contact`=`contact`.`id` WHERE `realty`.`id`=?', id ).then((result) => { 
            return (result[0].length > 0 ? result[0][0] : null);
        });
    }

    async getRealties() {
        return await con.promise().query(
            'SELECT *, `realty`.`id` AS `id` FROM `realty` INNER JOIN `contact` ON `realty`.`id_contact`=`contact`.`id`').then((result) => { 
            return (result[0].length > 0 ? result[0] : null);
        });
    }

    async deleteRealty(id) {
        return await con.promise().query('DELETE FROM `realty` WHERE ?', { id });
    }


    async update(id, realty) {
        return await con.promise().query('UPDATE `realty` SET ? WHERE ?', [realty, {id}] );
    }
    
};
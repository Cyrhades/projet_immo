require('dotenv').config();
const con = require('../app/database_sql.js');
const fs = require('fs');
const path = require("path");

fs.readdir('./data/', (err, files) => {
    if (err) {
        console.error('Erreur lors de la lecture du répertoire :', err);
        return;
    }
    // Filtrer les fichiers ayant l'extension .sql
    const sqlFiles = files.filter(file => path.extname(file) === '.sql');

    sqlFiles.forEach(sqlFile => {
        const sqlQuery = fs.readFileSync(path.join(__dirname, sqlFile), 'utf-8');

        // Exécuter le script SQL lu depuis le fichier
        con.promise().query(sqlQuery).then(([rows]) => {});
    });
});

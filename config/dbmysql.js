const mysql = require ('mysql');


    const conexion = mysql.createConnection({
        host : 'localhost',
        database : 'umg4desaweb',
        user : 'desaweb2020',
        password : 'desaweb2020',
        port: '3306'
        
    });
    
    conexion.connect(function(err) {
        if (err) {
            console.error('Error de conexion: ' + err.stack);
            return;
        }
        console.log('Conectado con el identificador ' + conexion.threadId);
    });

module.exports = conexion;


const conexion = require('../config/dbmysql')

exports.leer = (req, res)=>{
//res.json('todo OK');
conexion.query('SELECT * FROM productos;', (err, rows, fields)=>{
    if (!err)
        res.json(rows);

    else{
        console.log(err);
    }
    
});
//conexion.end();  
}

exports.busca = (req, res)=>{
 const { id } = req.params;
 //console.log(id);
 conexion.query('SELECT * FROM productos WHERE id=?;',[id], (err, rows, fields)=>{
    if (!err)
        res.json(rows[0]);

    else{
        console.log(err);
    }
});

}

exports.inserta = (req, res)=>{
    //const { id } = req.params;
    const {creado_por,id,nombre,precio}=req.body;
    conexion.query('INSERT INTO `productos` (`creado_por`, `id`, `nombre`, `precio`) VALUES (?,?,?,?);',[creado_por,id,nombre,precio], (err, rows, fields) => {
        if (!err)
           res.json({Status: 'Producto Guardado !'});
       else{
           console.log(err);
       }
   });
   
   }


exports.actualiza = (req, res)=>{
    const { id } = req.params;
    const {creado_por,nombre,precio}=req.body;
    conexion.query('UPDATE `productos` SET `creado_por`=?,`nombre`=?,`precio`=? WHERE `id`=?',[creado_por,nombre,precio,id], (err, rows, fields) => {
        if (!err)
           res.json({Status: 'Producto Actualizado !'});
       else{
           console.log(err);
       }
   });
   
   }

   exports.elimina = (req, res)=>{
    const { id } = req.params;
    conexion.query('DELETE FROM `productos` WHERE id=?',[id], (err, rows, fields) => {
        if (!err)
           res.json({Status: 'Producto Eliminado !'});
       else{
           console.log(err);
       }
   });
   
   }
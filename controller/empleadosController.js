const conexion = require('../config/dbmysql')

exports.leer = (req, res)=>{
//res.json('todo OK');
conexion.query('SELECT * FROM empleados;', (err, rows, fields)=>{
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
 conexion.query('SELECT * FROM empleados WHERE id=?;',[id], (err, rows, fields)=>{
    if (!err)
        res.json(rows[0]);

    else{
        console.log(err);
    }
});

}

exports.inserta = (req, res)=>{
    //const { id } = req.params;
    const {codigo,creado_por,id,nombre,salario}=req.body;
    conexion.query('INSERT INTO `empleados` (`codigo`, `creado_por`, `id`, `nombre`, `salario`) VALUES (?,?,?,?,?);',[codigo, creado_por, id, nombre, salario], (err, rows, fields) => {
       if (!err)
           res.json({Status: 'Empleado Guardado !'});
       else{
           console.log(err);
       }
   });
   
   }

exports.actualiza = (req, res)=>{
    const { id } = req.params;
    const {codigo,creado_por,nombre,salario}=req.body;
    conexion.query('UPDATE `empleados` SET `codigo`=?, `creado_por`=?, `nombre`=?, `salario`=? WHERE `id`=?',[codigo,creado_por,nombre,salario,id], (err, rows, fields) => {
                    //UPDATE `clientes` SET `creado_por`=[value-1],`direccion`=[value-2],`id`=[value-3],`nit`=[value-4],`nombre`=[value-5] WHERE 1    
        if (!err)
           res.json({Status: 'Empleado Actualizado !'});
       else{
           console.log(err);
       }
   });
   
   }

   exports.elimina = (req, res)=>{
    const { id } = req.params;
    //const {creado_por,direccion,nit,nombre}=req.body;
    conexion.query('DELETE FROM `empleados` WHERE id=?',[id], (err, rows, fields) => {
                    //DELETE FROM `clientes` WHERE id='222'
                    //UPDATE `clientes` SET `creado_por`=[value-1],`direccion`=[value-2],`id`=[value-3],`nit`=[value-4],`nombre`=[value-5] WHERE 1    
        if (!err)
           res.json({Status: 'Empleado Eliminado !'});
       else{
           console.log(err);
       }
   });
   
   }
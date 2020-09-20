const empleadosController = require('../controller/empleadosController');
module.exports = (router) => {
    router.get('/empleados', empleadosController.leer);
    router.get('/empleados/:id', empleadosController.busca);
    router.post('/empleados', empleadosController.inserta);
    router.put('/empleados/:id', empleadosController.actualiza);
    router.delete('/empleados/:id', empleadosController.elimina);
    
  }
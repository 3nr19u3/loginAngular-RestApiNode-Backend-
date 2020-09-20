const clientesController = require('../controller/clientesController');
module.exports = (router) => {
    router.get('/clientes', clientesController.leer);
    router.get('/clientes/:id', clientesController.busca);
    router.post('/clientes', clientesController.inserta);
    router.put('/clientes/:id', clientesController.actualiza);
    router.delete('/clientes/:id', clientesController.elimina);
}
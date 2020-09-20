const clientesController = require('../controller/clientesController');
module.exports = (router) => {
    router.get('/clientes', clientesController.leer);
}
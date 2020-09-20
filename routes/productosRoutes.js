const productosController = require('../controller/productosController');
module.exports = (router) => {
    router.get('/productos', productosController.leer);
    router.get('/productos/:id', productosController.busca);
    router.post('/productos', productosController.inserta);
    router.put('/productos/:id', productosController.actualiza);
    router.delete('/productos/:id', productosController.elimina);
}
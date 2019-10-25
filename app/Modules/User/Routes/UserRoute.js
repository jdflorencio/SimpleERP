const express = require('express');
const routes = express.Router();

const userController = require('../Controllers/UserController');

routes.get('/', userController.index);
routes.get('/:idUser', userController.user);
routes.post('/' ,userController.create);
routes.put('/', userController.update);
routes.delete('/:idUser', userController.delete);

module.exports = routes;
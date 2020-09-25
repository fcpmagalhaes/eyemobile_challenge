const express = require('express');
const TransactionController = require('./controllers/TransactionController');
const UserController = require('./controllers/UserController');
const FlagsController = require('./controllers/FlagsController');
const ModalitiesController = require('./controllers/ModalitiesController');

const routes = express.Router();

routes.get('/', (req, res) => res.send('API running 🚀'));
routes.get('/flags', FlagsController.index);
routes.get('/modalities', ModalitiesController.index);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/transactions', TransactionController.index);
routes.post('/transactions', TransactionController.create);

module.exports = routes;

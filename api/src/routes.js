const express = require('express');
const TransactionController = require('./controllers/TransactionController');
const UserController = require('./controllers/UserController');
const FlagsController = require('./controllers/FlagsController');
const ModalitiesController = require('./controllers/ModalitiesController');
const SessionController = require('./controllers/SessionController');
const login = require('./middleware/Login');
const terminalVerify = require('./middleware/TerminalVerify');
const portalVerify = require('./middleware/PortalVerify');

const routes = express.Router();

routes.get('/', (req, res) => res.send('API running 🚀'));
routes.get('/flags', login, terminalVerify, FlagsController.index);
routes.get('/modalities', login, terminalVerify, ModalitiesController.index);

routes.get('/users', login, terminalVerify, UserController.index);
routes.post('/users', UserController.create);

routes.get('/transactions', login, terminalVerify, TransactionController.index);
routes.post('/transactions', login, portalVerify, TransactionController.create);

routes.post('/sessions', SessionController.create);

module.exports = routes;

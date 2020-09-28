const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const TransactionController = require('./controllers/TransactionController');
const UserController = require('./controllers/UserController');
const FlagsController = require('./controllers/FlagsController');
const ModalitiesController = require('./controllers/ModalitiesController');
const SessionController = require('./controllers/SessionController');
const BalancerController = require('./controllers/BalancerController');
const login = require('./middleware/Login');
const terminalVerify = require('./middleware/TerminalVerify');
const portalVerify = require('./middleware/PortalVerify');

const routes = express.Router();

routes.get('/', (req, res) => res.send('API running 🚀'));

routes.get(
  '/flags',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  login, portalVerify, FlagsController.index,
);

routes.get(
  '/modalities',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  login, portalVerify, ModalitiesController.index,
);

routes.get(
  '/users',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  login, portalVerify, UserController.index,
);

routes.post(
  '/users',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      login: Joi.string().required(),
      password: Joi.string().required().length(6),
    }),
  }),
  UserController.create,
);

routes.post(
  '/sessions',
  SessionController.create,
);

routes.get(
  '/transactions',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  login, portalVerify, TransactionController.index,
);

routes.post(
  '/transactions',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  login, terminalVerify,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      nsu: Joi.string().required(),
      value: Joi.number().precision(2).required(),
      flag_name: Joi.string().required(),
      modality_type: Joi.string().required(),
      date: Joi.date().required(),
    }),
  }),
  TransactionController.create,
);

routes.get(
  '/transactions/balancer',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  login, portalVerify, BalancerController.index,
);

module.exports = routes;

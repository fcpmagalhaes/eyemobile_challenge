const express = require("express");

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.send('API running 🚀');
});

module.exports = routes;

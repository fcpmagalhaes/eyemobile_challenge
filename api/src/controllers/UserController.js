const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const users = await connection('users').select('*');

    return res.json(users);
  },

  async create(req, res) {
    const { login, password } = req.body;

    await connection('users').insert({
      login, password,
    });

    return res.json({ login, password });
  },

};

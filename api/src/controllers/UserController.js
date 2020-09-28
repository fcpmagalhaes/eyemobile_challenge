const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const users = await connection('users').select('*');

    return res.status(200).json(users);
  },

  async create(req, res) {
    const { login, password } = req.body;

    const user = await connection('users').where('login', login).select('id').first();
    if (user) {
      return res.status(200).json({ error: 'User already registered' });
    }

    try {
      await connection('users').insert({
        login, password,
      });
      return res.status(200).json({ message: 'User created with success', login });
    } catch (error) {
      return res.status(500).json({ error: 'Error on create user' });
    }
  },

};

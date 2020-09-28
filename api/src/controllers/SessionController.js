const jwt = require('jsonwebtoken');
const connection = require('../database/connection');
require('dotenv/config');

module.exports = {
  async create(req, res) {
    const { login, password } = req.body;
    const user = await connection('users').where('login', login).select('*').first();
    if (!user) {
      return res.status(401).json({ error: 'Authentication failure' });
    }
    if (user.password === password) {
      const token = jwt.sign(
        {
          user_id: user.id,
          login: user.login,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: '1h',
        },
      );
      return res.status(200).json({ message: 'User connected', token });
    }
    return res.status(401).json({ error: 'Authentication failure' });
  },
};

const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const flags = await connection('flags').select('*');

    return res.json(flags);
  },
};

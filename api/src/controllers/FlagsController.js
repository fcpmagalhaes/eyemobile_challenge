const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const flags = await connection('flags').select('*');

    return res.status(200).json(flags);
  },
};

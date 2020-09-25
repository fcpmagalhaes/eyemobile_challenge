const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const modalities = await connection('modalities').select('*');

    return res.json(modalities);
  },
};

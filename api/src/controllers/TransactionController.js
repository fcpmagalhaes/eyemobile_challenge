const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const transactions = await connection('transactions').select('*');

    return res.json(transactions);
  },
};

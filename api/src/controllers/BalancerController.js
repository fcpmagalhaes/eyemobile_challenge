const { compareAsc, parseISO } = require('date-fns');
const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    try {
      const transactions = await connection('transactions').select('avaliable', 'value');
      let toReceive = 0;
      let avaliable = 0;

      transactions.map((transaction) => {
        const parsedDate = parseISO(transaction.avaliable);
        const today = new Date();
        const compare = compareAsc(today, parsedDate);
        if (compare === 1) {
          avaliable += transaction.value;
        } else {
          toReceive += transaction.value;
        }
        return null;
      });
      return res.status(200).json({ avaliable, toReceive });
    } catch (error) {
      return res.status(500).json({ error: 'Error on load balance' });
    }
  },
};

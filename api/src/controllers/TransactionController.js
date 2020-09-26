/* eslint-disable camelcase */
const connection = require('../database/connection');
const calculateNetValue = require('../utils/calculateNetValue');
const generateAvaliableDay = require('../utils/generateAvaliableDay');
const validateFields = require('../utils/validateFields');

module.exports = {
  async index(req, res) {
    const transactions = await connection('transactions').select('*');

    return res.json(transactions);
  },

  async create(req, res) {
    // const { login, password } = req.headers.authorization;
    const {
      nsu, value, flag_name, modality_type, date,
    } = req.body;

    const { valid, msg } = await validateFields(nsu, value, flag_name, modality_type);
    if (!valid) {
      return res.status(400).json({ message: msg });
    }

    try {
      const net_value = calculateNetValue(modality_type, value);
      const avaliable = generateAvaliableDay(modality_type, date);
      const payload = {
        nsu, value, net_value, flag_name, modality_type, date, avaliable,
      };

      const [id] = await connection('transactions').insert(payload);

      return res.json({ message: 'transaction created with success', id });
    } catch (error) {
      return res.json({ message: 'Error on save transaction', error });
    }
  },
};

/* eslint-disable camelcase */
const connection = require('../database/connection');
const calculateNetValue = require('../utils/calculateNetValue');
const generateAvaliableDay = require('../utils/generateAvaliableDay');
const validateFields = require('../utils/validateFields');

module.exports = {
  async index(req, res) {
    try {
      const transactions = await connection('transactions').select('*');
      return res.status(200).json(transactions);
    } catch (error) {
      return res.status(500).json({ error: 'Error on load transactions' });
    }
  },

  async create(req, res) {
    const {
      nsu, value, flag_name, modality_type, date,
    } = req.body;

    const { valid, msg } = await validateFields(nsu, value, flag_name, modality_type);
    if (!valid) {
      return res.status(401).json({ message: msg });
    }

    try {
      const net_value = calculateNetValue(modality_type, value);
      const avaliable = generateAvaliableDay(modality_type, date);
      const payload = {
        nsu, value, net_value, flag_name, modality_type, date, avaliable,
      };

      const [id] = await connection('transactions').insert(payload);

      return res.status(201).json({ message: 'transaction created with success', id });
    } catch (error) {
      return res.status(500).json({ error: 'Error on save transaction' });
    }
  },
};

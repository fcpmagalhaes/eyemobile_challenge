/* eslint-disable camelcase */
const connection = require('../database/connection');

module.exports = async function validateFields(nsu, value, flag_name, modality_type) {
  if (value < 0) {
    return { valid: false, msg: 'Not allowed negative value.' };
  }
  const nsuVerify = await connection('transactions').where('nsu', nsu).select('id').first();
  if (nsuVerify) {
    return { valid: false, msg: 'Not allowed NSU duplicated.' };
  }
  const flagVerify = await connection('flags').where('name', flag_name).select('name').first();
  if (!flagVerify) {
    return { valid: false, msg: 'Credit card flag not allowed.' };
  }
  const modalityVerify = await connection('modalities').where('type', modality_type).select('type').first();
  if (!modalityVerify) {
    return { valid: false, msg: 'Modality not allowed. Make sure select credit or debit.' };
  }
  return { valid: true, msg: '' };
};

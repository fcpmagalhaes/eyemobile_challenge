const { addBusinessDays, formatISO } = require('date-fns');

module.exports = function generateAvaliableDay(modality, date) {
  let avaliableDate;
  if (modality === 'credit') {
    avaliableDate = addBusinessDays(date, 30);
  } else if (modality === 'debit') {
    avaliableDate = addBusinessDays(date, 1);
  }
  return formatISO(avaliableDate);
};

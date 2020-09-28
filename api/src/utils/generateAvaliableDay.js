const { addBusinessDays, formatISO, parseISO } = require('date-fns');

module.exports = function generateAvaliableDay(modality, date) {
  let avaliableDate;
  const parsedDate = parseISO(date);
  if (modality === 'credit') {
    avaliableDate = addBusinessDays(parsedDate, 31);
  } else if (modality === 'debit') {
    avaliableDate = addBusinessDays(parsedDate, 2);
  }
  return formatISO(avaliableDate);
};

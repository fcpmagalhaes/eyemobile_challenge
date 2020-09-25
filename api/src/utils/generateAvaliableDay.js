const { addBusinessDays, format, parseISO } = require('date-fns');

module.exports = function generateAvaliableDay(modality, date) {
  let avaliableDate;
  const parsedDate = parseISO(date);
  if (modality === 'credit') {
    avaliableDate = addBusinessDays(parsedDate, 30);
  } else if (modality === 'debit') {
    avaliableDate = addBusinessDays(parsedDate, 1);
  }
  return format(avaliableDate, 'yyyy-mm-dd');
};

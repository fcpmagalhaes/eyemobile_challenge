module.exports = function calculateNetValue(modality, value) {
  let newValue;
  if (modality === 'credit') {
    newValue = value - (value * 0.03);
  } else if (modality === 'debit') {
    newValue = value - (value * 0.02);
  }
  return newValue;
};

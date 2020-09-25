exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('flags').del()
    .then(() => knex('flags').insert([
      { name: 'VISA' },
      { name: 'MASTERCARD' },
      { name: 'ELO' },
      { name: 'AMEX' },
    ]));
};

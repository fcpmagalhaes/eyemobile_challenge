
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('flags').del()
    .then(function () {
      // Inserts seed entries
      return knex('flags').insert([
        {name: 'VISA'},
        {name: 'MASTERCARD'},
        {name: 'ELO'},
        {name: 'AMEX'}
      ]);
    });
};
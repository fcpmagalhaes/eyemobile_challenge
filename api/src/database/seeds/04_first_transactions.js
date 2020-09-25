
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('transactions').insert([
        {nsu: '0451456', value: 79.99, net_value: 78.39, flag_name: 'MASTERCARD', modality_type: 'debit', date: knex.fn.now(), avaliable: knex.fn.now() }
      ]);
    });
};


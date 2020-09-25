exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('modalities').del()
    .then(() => knex('modalities').insert([
      { type: 'debit' },
      { type: 'credit' },
    ]));
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {login: 'terminal', password: '123456'},
        {login: 'portal', password: '123456'},
      ]);
    });
};

exports.up = function (knex) {
  return knex.schema.alterTable('users', (table) => {
    table.unique('login');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};

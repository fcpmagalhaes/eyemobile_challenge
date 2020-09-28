exports.up = function (knex) {
  return knex.schema.alterTable('transactions', (table) => {
    table.unique('nsu');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('transactions');
};

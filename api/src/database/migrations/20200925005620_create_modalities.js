exports.up = function (knex) {
  return knex.schema.createTable('modalities', (table) => {
    table.string('type').primary();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('modalities');
};

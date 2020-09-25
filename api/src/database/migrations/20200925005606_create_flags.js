exports.up = function (knex) {
  return knex.schema.createTable("flags", function (table) {
    table.string("name").primary();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("flags");
};

exports.up = function (knex) {
  return knex.schema.createTable("transactions", function (table) {
    table.increments("id").primary();
    table.string("nsu", 7).notNullable();
    table.decimal("value").notNullable();
    table.decimal("net_value").notNullable();
    table.string("flag").notNullable();
    table.string("modality").notNullable();
    table.datetime("date").notNullable();
    table.date("avaliable").notNullable();
    table.integer('user_id').unsigned().notNullable();

    table.foreign("user_id").references("id").inTable("user");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("transactions");
};

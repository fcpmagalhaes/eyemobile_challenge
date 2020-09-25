exports.up = function (knex) {
  return knex.schema.createTable("transactions", function (table) {
    table.increments("id").primary();
    table.string("nsu", 7).notNullable();
    table.decimal("value").notNullable();
    table.decimal("net_value").notNullable();
    table.string("flag_name").notNullable();
    table.string("modality_type").notNullable();
    table.datetime("date").notNullable();
    table.date("avaliable").notNullable();
    table.integer('user_id').unsigned().notNullable();

    table.foreign("user_id").references("id").inTable("user");
    table.foreign("flag_name").references("name").inTable("flags");
    table.foreign("modality_type").references("type").inTable("modalities");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("transactions");
};

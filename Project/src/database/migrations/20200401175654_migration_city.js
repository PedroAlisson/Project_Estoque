exports.up = function (knex) {
  return knex.schema.createTable("city", function (table) {
    table.increments("id"),
      table.uuid("uuid"),
      table.string("city").notNullable();

    table.integer("id_address");
    table.foreign("id_address").references("id").inTable("address");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("city");
};

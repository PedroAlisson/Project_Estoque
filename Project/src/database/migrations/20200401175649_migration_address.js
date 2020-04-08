exports.up = function (knex) {
  return knex.schema.createTable("address", function (table) {
    table.increments("id"),
      table.uuid("uuid"),
      table.string("address").notNullable();
    table.string("complement").notNullable();
    table.string("number").notNullable();

    table.integer("id_clients");
    table.foreign("id_clients").references("id").inTable("clients");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("address");
};

exports.up = function (knex) {
  return knex.schema.createTable("products", function (table) {
    table.increments("id"),
      table.uuid("uuid"),
      table.string("name").notNullable();
    table.string("description").notNullable();
    table.date("validade");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};

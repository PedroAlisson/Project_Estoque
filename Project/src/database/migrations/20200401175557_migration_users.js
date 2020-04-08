exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id"),
      table.uuid("uuid"),
      table.string("name").notNullable();
    table.string("password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};

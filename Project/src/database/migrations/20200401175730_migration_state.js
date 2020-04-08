exports.up = function (knex) {
  return knex.schema.createTable("state", function (table) {
    table.increments("id"),
      table.uuid("uuid"),
      table.string("state").notNullable();

    table.integer("id_city");
    table.foreign("id_city").references("id").inTable("city");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTbale("state");
};

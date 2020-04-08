exports.up = function (knex) {
  return knex.schema.createTable("clients", function (table) {
    table.increments("id"),
      table.uuid("uuid"),
      table.string("name").notNullable();
    table.string("idade").notNullable();
    table.string("cpf").notNullable();
    table.enu("Sexo", ["Masculino", "Feminino", "Outro"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("clients");
};

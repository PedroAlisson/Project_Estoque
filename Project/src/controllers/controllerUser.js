const connection = require("../database/connection/connection");
const Id_uuid = require("uuid");

module.exports = {
  async index(request, response) {
    const users = await connection("users").select("*");
    return response.json(users);
  },

  async delete(request, response) {
    const { id } = request.params;

    const del = await connection("users").delete().where("id", "=", id);

    return response.json(del);
  },
  async update(request, response) {
    const { name, password } = request.body;
    const { uuid } = request.params;
    const usersupdate = await connection("users")
      .where({ uuid: uuid })
      .update({ name: `${name}`, password: `${password}` });

    return response.json(usersupdate);
  },

  async store(request, response) {
    const { name, password } = request.body;

    const uuid = Id_uuid.v4();

    const user = await connection("users").insert({
      uuid,
      name,
      password,
    });

    return response.json(user);
  },
};

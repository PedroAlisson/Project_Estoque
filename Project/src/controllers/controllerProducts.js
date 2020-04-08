const connection = require("../database/connection/connection");
const Id_uuid = require("uuid");
module.exports = {
  async index(request, response) {
    const prodc = await connection("products").select("*");
    response.json(prodc);
  },

  async delete(request, response) {
    const { id } = request.params;

    const del = await connection("products").delete().where("id", "=", id);

    return response.json(del);
  },
  async update(request, response) {
    const { name, description, validade } = request.body;
    const { uuid } = request.params;
    const productsupdate = await connection("products")
      .where({ uuid: uuid })
      .update({
        name: `${name}`,
        description: `${description}`,
        validade: `${validade}`,
      });

    return response.json(productsupdate);
  },

  async store(request, response) {
    const { name, description, validade } = request.body;
    const uuid = Id_uuid.v4();

    const products = await connection("products").insert({
      uuid,
      name,
      description,
      validade,
    });
    response.json(products);
  },
};

const connection = require("../database/connection/connection");
const Id_uuid = require("uuid");

module.exports = {
  async index(request, response) {
    const client = await connection("clients")
      .join("address", "address.id_clients", "=", "clients.id")
      .join("city", "city.id_address", "=", "address.id")
      .join("state", "state.id_city", "=", "city.id")
      .select(["*"]);

    return response.json(client);
  },

  async delete(request, response) {
    const { id } = request.params;

    const clien = await connection("clients").delete().where("id", "=", id);

    const address = await connection("address").delete().where("id", "=", id);

    const city = await connection("city").delete().where("id", "=", id);

    const state = await connection("state").delete().where("id", "=", id);

    return response.json(clien);

    return response.json(del);
  },
  async update(request, response) {
    const {
      name,
      idade,
      cpf,
      sexo,
      address,
      complement,
      number,
      city,
      state,
    } = request.body;
    const { uuid } = request.params;
    const productsupdate = await connection("clients")
      .where({ uuid: uuid })
      .update({
        name: `${name}`,
        idade: `${idade}`,
        cpf: `${cpf}`,
        sexo: `${sexo}`,
      });

    const addressupdate = await connection("address")
      .where({ uuid: uuid })
      .update({
        address: `${address}`,
        complement: `${complement}`,
        number: `${number}`,
      });

    const cityupdate = await connection("city")
      .where({ uuid: uuid })
      .update({
        city: `${city}`,
      });

    const stateupdate = await connection("state")
      .where({ uuid: uuid })
      .update({
        state: `${state}`,
      });

    return response.json(
      productsupdate,
      addressupdate,
      cityupdate,
      stateupdate
    );
  },

  async store(request, response) {
    const uuid = Id_uuid.v4();

    const {
      name,
      idade,
      cpf,
      sexo,
      address,
      complement,
      number,
      city,
      state,
    } = request.body;

    const clients = await connection("clients").insert({
      uuid,
      name,
      idade,
      cpf,
      sexo,
    });

    const [id_clients] = clients;

    const addressa = await connection("address").insert({
      uuid,
      address,
      complement,
      number,
      id_clients,
    });

    const [id_address] = addressa;

    const citys = await connection("city").insert({
      uuid,
      city,
      id_address,
    });

    const [id_city] = citys;

    const states = await connection("state").insert({
      uuid,
      state,
      id_city,
    });

    return response.json(clients, addressa, citys, states);
  },
};

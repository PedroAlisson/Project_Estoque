const express = require("express");
const { celebrate, Joi, Segments } = require("celebrate");
const uuid = require("uuid");
const controllerUser = require("../controllers/controllerUser");

const controllerProducts = require("../controllers/controllerProducts");
const controllerClients = require("../controllers/controllerClients");
const routes = express.Router();

routes.get("/users", controllerUser.index);
routes.post(
  "/users",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      uuid: Joi.string().uuid(),
      name: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  controllerUser.store
);
routes.put(
  "/users/:uuid",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  controllerUser.update
);
routes.delete(
  "/users/delete/:uuid",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().uuid().required(),
    }),
  }),
  controllerUser.delete
);

routes.get("/products", controllerProducts.index);
routes.post(
  "/products",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().uuid(),
      name: Joi.string().required(),
      description: Joi.string().required(),
      validade: Joi.date().required(),
    }),
  }),
  controllerProducts.store
);
routes.put(
  "/products/:uuid",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      uuid: Joi.string().uuid(),
      name: Joi.string().required(),
      description: Joi.string().required(),
      validade: Joi.date().required(),
    }),
  }),
  controllerProducts.update
);
routes.delete(
  "/products/delete/:uuid",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().uuid().required(),
    }),
  }),
  controllerProducts.delete
);

routes.get("/clients", controllerClients.index);
routes.post("/clients", controllerClients.store);
routes.put(
  "/clients/:uuid",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().uuid().required().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      idade: Joi.number().required(),
      cpf: Joi.string().required(),
      sexo: Joi.string().required(),
      address: Joi.string().required(),
      complement: Joi.string().required(),
      number: Joi.number().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
    }),
  }),
  controllerClients.update
);
routes.delete(
  "/clients/delete/:uuid",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().uuid().required(),
    }),
  }),
  controllerClients.delete
);

module.exports = routes;

const express = require("express");
const { errors } = require("celebrate");
const app = express();

const routes = require("../src/routes/routes");

app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333, () => console.log("start"));

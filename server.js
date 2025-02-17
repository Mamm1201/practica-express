const express = require("express");
const morgan = require("morgan");

const app = express();
const articulos = [];
app.use(morgan("dev"));
app.use(express.json());

app.get("/articulos", (req, res) => {
  res.json(articulos);
});

app.post("/articulos", (req, res) => {
  const newArticulo = { ...req.body, id: articulos.length + 1 }; // guardamos en una constante el nuevo articulo y le sumamos 1 id
  articulos.push(newArticulo); //llamamos a la funcion app.post para crear el articulo
  res.send(newArticulo);
});

app.put("/articulos", (req, res) => {
  res.send("Actualizando articulos");
});

app.delete("/articulos", (req, res) => {
  res.send("Eliminando articulos");
});

app.get("/articulos/:id", (req, res) => {
  console.log(req.params.id);
  const articuloFound = articulos.find((a) => a.id == req.params.id);
  console.log(articuloFound);
  res.json(articuloFound);
});

app.listen(3000);
console.log("listening on port 3000");

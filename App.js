const express = require("express");

const app = express();

app.use(express.json());
app.use(express.text());

// PETICIONES
app.get("/hello/:username", (req, res) => {
  // usar mi nombe o el que le asine en la url
  res.send(`Hello ${req.params.username}`);
});

app.get("/", (req, res) => {
  res.send("Bienvenido a mi aplicación");
});

app.get("/products", (req, res) => {
  res.send("Lista de productos");
});

app.post("/articulos", (req, res) => {
  console.log(req.body);
  res.send("Nuevo articulo creado");
});

app.get("/user", (req, res) => {
  res.json({
    nombre: "Mario",
    apellidos: "Marquez",
    edad: "47",
    contraseña: "Mar1250",
  });
});

app.listen(3000);
console.log("listening on port 3000");

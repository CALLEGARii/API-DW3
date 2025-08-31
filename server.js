const express = require("express");
const app = express();
const port = 3000;
const db = require("./config/db");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const salasRoutes = require("./routes/SalasDeAulaRoutes");
app.use("/api/salas", salasRoutes);

const SalasDeAula = require("./models/SalasDeAula");
app.get("/salas", async (req, res) => {
  const salas = await SalasDeAula.findAll({ where: { removido: false } });
  res.render("salas", { salas });
});

db.sync().then(() => {
  console.log("Banco sincronizado!");
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
});

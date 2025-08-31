const express = require("express");
const app = express();
const port = 3000;
const db = require("./config/db");

// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rotas API
const salasRoutes = require("./routes/SalasDeAulaRoutes");
app.use("/api/salas", salasRoutes);

// rota HTML para exibir as salas
const SalasDeAula = require("./models/SalasDeAula");
app.get("/salas", async (req, res) => {
  const salas = await SalasDeAula.findAll({ where: { removido: false } });
  res.render("salas", { salas });
});

// conecta ao banco
db.sync().then(() => {
  console.log("Banco sincronizado!");
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
});

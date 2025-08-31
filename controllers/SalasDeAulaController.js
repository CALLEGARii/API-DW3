const SalasDeAula = require("../models/SalasDeAula");

// GET ALL
exports.getAll = async (req, res) => {
  const salas = await SalasDeAula.findAll({ where: { removido: false } });
  res.json(salas);
};

// GET BY ID
exports.getById = async (req, res) => {
  const sala = await SalasDeAula.findOne({
    where: { salasdeaulaid: req.params.id, removido: false }
  });
  sala ? res.json(sala) : res.status(404).json({ msg: "Sala não encontrada" });
};

// INSERT
exports.create = async (req, res) => {
  const { descricao, localizacao, capacidade } = req.body;
  const novaSala = await SalasDeAula.create({ descricao, localizacao, capacidade });
  res.status(201).json(novaSala);
};

// UPDATE
exports.update = async (req, res) => {
  const { descricao, localizacao, capacidade } = req.body;
  const sala = await SalasDeAula.findByPk(req.params.id);

  if (!sala || sala.removido) return res.status(404).json({ msg: "Sala não encontrada" });

  sala.descricao = descricao;
  sala.localizacao = localizacao;
  sala.capacidade = capacidade;
  await sala.save();

  res.json(sala);
};

// SOFT DELETE
exports.delete = async (req, res) => {
  const sala = await SalasDeAula.findByPk(req.params.id);
  if (!sala || sala.removido) return res.status(404).json({ msg: "Sala não encontrada" });

  sala.removido = true;
  await sala.save();

  res.json({ msg: "Sala removida com sucesso (soft delete)" });
};

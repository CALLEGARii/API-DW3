const { DataTypes } = require("sequelize");
const db = require("../config/db");

const SalasDeAula = db.define("SalasdeAula", {
  salasdeaulaid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  localizacao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  capacidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  removido: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = SalasDeAula;

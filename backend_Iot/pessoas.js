const Sequelize = require('sequelize');
const database = require('./db');

const Pessoa = database.define('pessoa', {
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING
},{
    timestamps: true,
});

module.exports = Pessoa;
const Sequelize = require('sequelize');
const database = require('./db');

const Lampada = database.define('lampada', {
    nome: Sequelize.STRING,
    estado: Sequelize.TEXT
},{
    timestamps: true,
});

module.exports = Lampada;
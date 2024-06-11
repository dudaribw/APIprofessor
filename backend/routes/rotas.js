//clienteRoutes.js
const express = require('express');
const router = express.Router();
const AlocacaoController = require('../controllers/alocacoesController');
const ProfessorController = require('../controllers/professoresController');
const SalaController = require('../controllers/salasController');
const ViewController = require('../controllers/visaoAlocacoesController');

// lembrando que a rota raiz tem clientes, definido no app.js
// Rota para obter todos os clientes
router.get('/alocacao/', AlocacaoController.getAllAlocacoes);
// Rota para obter um único cliente pelo ID
router.get('/professor/', ProfessorController.getAllProfessor);
// Rota para criar um novo cliente
router.get('/sala/', SalaController.getAllSalas);
// Rota para atualizar um cliente existente
router.get('/view/:id', ViewController.getViewById);
// Rota para deletar um cliente
module.exports = router;
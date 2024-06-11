const Alocacao = require('../models/alocacoesModel');
// Controlador para obter todos os clientes

// Controlador para obter um cliente pelo ID
exports.getAllAlocacoes = (req, res) => {
    Alocacao.getAllAlocacoes((err, view) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(view);
        }
    });
};
const Visao = require('../models/visaoAlocacoesModel');
// Controlador para obter todos os clientes

// Controlador para obter um cliente pelo ID
exports.getViewById = (req, res) => {
    Visao.getViewById(req.params.id, (err, visao) => {
        if (err) {
            res.status(500).send(err);
        } else if (visao) {
            res.json(visao);
        } else {
            res.status(404).send({ message: 'Visão não encontrada' });
        }
    });
};
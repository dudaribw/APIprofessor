const Sala = require('../models/salasModel');
// Controlador para obter todos os clientes

// Controlador para obter um cliente pelo ID
exports.getAllSalas = (req, res) => {
    Sala.getAllSalas((err, view) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(view);
        }
    });
};
const Professor = require('../models/professoresModel');
// Controlador para obter todos os clientes

// Controlador para obter um cliente pelo ID
exports.getAllProfessor = (req, res) => {
    Professor.getAllProfessor((err, view) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(view);
        }
    });
};
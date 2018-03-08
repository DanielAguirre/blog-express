const { check, validationResult } = require('express-validator/check');
const db = require('../db');

exports.findOne = async (req, res) => {
    const user = await db.find(req.params.id);
    res.json(user);
} 

exports.create = async (req, res) => {
    const user = await db.create(req.body);
    res.status(201).json(user);
}

exports.update = async (req, res) => {
    const user = await db.create(req.params.id, req.body);
    res.status(201).json(user);
}

exports.update = async (req, res) => {
    const user = await db.delete(req.params.id);
    res.status(201).json(user);
}

const Profession = require('../models/profession');

const getAllProfession = (req, res, next) => {
    Profession.findAll().then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: "No profession" });
    })
};

const newProfession = (req, res, next) => {
    if (!req.body.name) {
        res.status(400).send({ message: 'Fields empty!' });
        return;
    }

    const profession = {
        name: req.body.name
    }

    Profession.create(profession).then((data) => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: 'Error' })
    })
};

const getProfession = (req, res, next) => {
    if (!req.params.id) {
        res.status(400).send({ message: 'No id params' })
    }

    const id = req.params.id;

    Profession.findByPk(id).then((data) => {
        if (data) res.send(data);
        else res.status(404).send({ message: "Not found" });
    }).catch(err => {
        res.status(500).send({ message: "Error" });
    })
};

const updateProfession = (req, res, next) => {
    if (!req.body.name || !req.params.id) {
        res.status(400).send({ message: 'Fields empty!' });
        return;
    }

    const id = req.params.id;

    const profession = {
        name: req.body.name
    }

    Profession.update(profession, { where: { id: id } }).then((num) => {
        if (num == 1) res.send({ message: 'Updated' });
        else res.status(400).send({ message: "Not updated" });
    }).catch(err => {
        res.status(500).send({ message: "Error" });
    })
};

const deleteProfession = (req, res, next) => {
    if (!req.params.id) {
        res.status(400).send({ message: 'No id params' })
    }

    const id = req.params.id;

    Profession.destroy({ where: { id: id } }).then((num) => {
        if (num == 1) res.send({ message: 'Deleted' });
        else res.status(400).send({ message: 'Not deleted' })
    }).catch(err => {
        res.status(500).send({ message: 'Error' });
    })
};

module.exports = {
    getAllProfession,
    newProfession,
    getProfession,
    updateProfession,
    deleteProfession
};
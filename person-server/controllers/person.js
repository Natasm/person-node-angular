const Person = require('../models/person');
const Profession = require('../models/profession');

const getAllPerson = (req, res, next) => {
    Person.findAll({
        include: [{
            model: Profession,
            required: false,
            attributes: ['id', 'name']
        }]
    }).then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: "No persons" });
    })
};

const newPerson = (req, res, next) => {
    if (!req.body.name || !req.body.phone || !req.body.email) {
        res.status(400).send({ message: 'Fields empty!' });
        return;
    }

    const person = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        profession_id: req.body.profession_id
    }

    Person.create(person).then((data) => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({ message: 'Error' })
    })
};

const getPerson = (req, res, next) => {
    if (!req.params.id) {
        res.status(400).send({ message: 'No id params' })
    }

    const id = req.params.id;

    Person.findByPk(id, {
        include: [{
            model: Profession,
            required: false,
            attributes: ['id', 'name']
        }]
    }).then((data) => {
        if (data) res.send(data);
        else res.status(404).send({ message: "Not found" });
    }).catch(err => {
        res.status(500).send({ message: "Error" });
    })
};

const updatePerson = (req, res, next) => {
    if (!req.body.name || !req.body.phone || !req.body.email || !req.params.id) {
        res.status(400).send({ message: 'Fields empty!' });
        return;
    }

    const id = req.params.id;

    const person = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        profession_id: req.body.profession_id
    }

    Person.update(person, { where: { id: id } }).then((num) => {
        if (num == 1) res.send({ message: 'Updated' });
        else res.status(400).send({ message: "Not updated" });
    }).catch(err => {
        res.status(500).send({ message: "Error" });
    })
};

const deletePerson = (req, res, next) => {
    if (!req.params.id) {
        res.status(400).send({ message: 'No id params' })
    }

    const id = req.params.id;

    Person.destroy({ where: { id: id } }).then((num) => {
        if (num == 1) res.send({ message: 'Deleted' });
        else res.status(400).send({ message: 'Not deleted' })
    }).catch(err => {
        res.status(500).send({ message: 'Error' });
    })
};

module.exports = {
    getAllPerson,
    newPerson,
    getPerson,
    updatePerson,
    deletePerson
};
const express = require('express');
const router = express.Router();
const personController = require('../controllers/person');

router.get('/person', personController.getAllPerson);
router.post('/person', personController.newPerson);

router.get('/person/:id', personController.getPerson);
router.put('/person/:id', personController.updatePerson);
router.delete('/person/:id', personController.deletePerson);

module.exports = router;
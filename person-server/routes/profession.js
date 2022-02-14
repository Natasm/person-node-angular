const express = require('express');
const router = express.Router();
const professionController = require('../controllers/profession');

router.get('/profession', professionController.getAllProfession);
router.post('/profession', professionController.newProfession);

router.get('/profession/:id', professionController.getProfession);
router.put('/profession/:id', professionController.updateProfession);
router.delete('/profession/:id', professionController.deleteProfession);

module.exports = router;
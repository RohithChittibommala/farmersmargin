const express = require('express');
const router = express.Router();
const {getFields, addField} = require('../controllers/field');

router.route('/').post(addField);
router.route('/:lon/:lat').get(getFields);

module.exports = router;
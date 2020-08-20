const express = require('express');
const router = express.Router();
const {getFarms, addFarm} = require('../controllers/farm');

router.route('/').post(addFarm);
router.route('/:lon/:lat').get(getFarms);

module.exports = router;
const express = require('express');
const router = express.Router();
const {
  media,
  addMediaByUser,
  assignedMediaByUser,
} = require('../controllers/media');

router.get('/profile', media);
router.post('/addMediaByUser', addMediaByUser);
router.post('/assignedMediaByUser', assignedMediaByUser);

module.exports = router;

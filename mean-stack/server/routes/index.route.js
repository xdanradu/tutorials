const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const config = require('./../config/config');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.get('/here-maps-api-key', (req, res) => {
    res.send({ key: config.hereMapsApiKey});
}

);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

module.exports = router;

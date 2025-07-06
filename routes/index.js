const express = require('express');
const router = express.Router();

// Import routes
const authRoutes = require('./AuthRoutes');
const branchRoutes = require('./BranchRoutes');
const historyRoutes = require('./HistoryRoutes');
const sensorRoutes = require('./SensorRoutes');
const userRoutes = require('./UserRoutes');

// Use routes
router.use(authRoutes);
router.use(branchRoutes);
router.use(historyRoutes);
router.use(sensorRoutes);
router.use(userRoutes);

module.exports = router;
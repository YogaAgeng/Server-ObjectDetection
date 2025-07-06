const sequelize = require('../config/database');
const { Op } = require('sequelize');

const Branch = require('./Branch');
const History = require('./History');
const Sensor = require('./Sensor');
const User = require('./Users');

const models = {
    Branch,
    History,
    Sensor,
    User
};

// Associate models
Object.values(models).forEach(model => {
    if (model.associate) {
        model.associate(models);
    }
});

// Export models and sequelize instance
module.exports = {
    ...models,
    sequelize,
    Op
};
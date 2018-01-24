// var fs = require('fs');
// var path = require('path');
import Sequelize from 'sequelize';

const sequelize = new Sequelize('entendre', 'jordan', 'postgres', {
  dialect: 'postgres',
  operatorsAliases: false,
  // underscored: true,
});

// var env = process.env.NODE_ENV || 'development';
// var config = require(__dirname + '/../config/config.js')[env];
const models = {
  User: sequelize.import('./users'),
  Artist: sequelize.import('./artists'),
  Album: sequelize.import('./albums'),
  Song: sequelize.import('./songs'),
  Tag: sequelize.import('./tags'),
  Device: sequelize.import('./devices'),
};
// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;

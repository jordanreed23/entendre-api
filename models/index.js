import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + './../config/config.js')[env];

// if (process.env.DATABASE_URL) {
//   const sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
//     protocol: 'postgres',
//     // port: match[4],
//     // host: match[3],
//     logging: true,
//     operatorsAliases: false,
//   });
// } else {
  const sequelize = new Sequelize('entendre', 'jordan', 'postgres', {
    dialect: 'postgres',
    operatorsAliases: false,
  });
// }



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

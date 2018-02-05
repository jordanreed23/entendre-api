// import fs from 'fs';
// import path from 'path';
import Sequelize from 'sequelize';

require('dotenv').config();

// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + './../config/config.js')[env];
let sequelize = '';

// console.log(config);

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    ssl: true,
    dialectOptions: {
      ssl: true,
    },
  });
  console.log("using heroku db");
} else {
  sequelize = new Sequelize('entendre', 'jordan', 'postgres', {
    dialect: 'postgres',
    operatorsAliases: false,
  });
  console.log("using local db");
}

const models = {
  User: sequelize.import('./users'),
  Artist: sequelize.import('./artists'),
  Album: sequelize.import('./albums'),
  Song: sequelize.import('./songs'),
  Tag: sequelize.import('./tags'),
  Device: sequelize.import('./devices'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;

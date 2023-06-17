const { Sequelize } = require('sequelize');
const sequelize = require('./database');

// Create a new Sequelize instance
const sequelize = new Sequelize('nodecomplete', 'root', 'bhavya27465@', {
  host: 'localhost',
  dialect: 'mysql'
});

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;

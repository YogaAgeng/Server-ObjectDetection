require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

const sequelize = require('./config/database');
const routes = require('./routes');

class App {
  constructor() {
    this.app = express();
    this.port = parseInt(process.env.APP_PORT, 10) || 3002;

    this.configureMiddleware();
    this.configureRoutes();
    this.connectToDatabase();
  }

  configureMiddleware() {
    this.app.use(cors({ origin: '*', credentials: true }));
    this.app.use('/public', express.static(path.join(__dirname, 'public')));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  configureRoutes() {
    this.app.use(routes);
  }

  async connectToDatabase() {
    try {
      await sequelize.sync();
      this.app.listen(this.port, () => {
        console.log(` > Server is running on http://localhost:${this.port}`);
      });
    } catch (error) {
      console.error(' > Error connecting to the database:', error.message);
    }
  }
}

new App();
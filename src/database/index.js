import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig); // inicializa o db com as config
  }
}

export default new Database();

import Sequelize from 'sequelize';
import dbconfig from '../config/database';
import Student from '../models/Student';

const models = [Student];

const connection = new Sequelize(dbconfig);

models.forEach((model) => model.init(connection));

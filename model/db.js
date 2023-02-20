import Sequelize from 'sequelize';

const sequelize = new Sequelize({
  database: 'psr',
  username: 'postgres',
  password: 'postgres@db',
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;

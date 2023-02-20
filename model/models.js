import { DataTypes } from 'sequelize';
import sequelize from './db.js';

const Manager = sequelize.define('Manager', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  project_name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
});

Manager.hasMany(Project);
Project.belongsTo(Manager);

const Report = sequelize.define('Report', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  report_name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  project_code: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  sprint_name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  form: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
});

Project.hasMany(Report, { constraints: true, onDelete: 'CASCADE' });
Report.belongsTo(Project);

export { Manager, Project, Report };

import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Company from './Company';
import City from './City';
import Role from './Role';

class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public gender!: string;
  public companyId!: number;
  public cityId!: number;
  public titleId!: number;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: STRING,
    allowNull: false,
  },
  last_name: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  gender: {
    type: STRING,
    allowNull: false,
  },
  companyId: {
    type: INTEGER,
    allowNull: false,
  },
  cityId: {
    type: INTEGER,
    allowNull: false,
  },
  titleId: {
    type: INTEGER,
    allowNull: false,
  },

}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

User.belongsTo(Company, { foreignKey: 'companyId', as: 'idCompany' });
User.belongsTo(City, { foreignKey: 'cityId', as: 'idCity' });
User.belongsTo(Role, { foreignKey: 'titleId', as: 'idTitle' });

export default User;
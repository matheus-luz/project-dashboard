import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Company from './Company';
import City from './City';
import Role from './Office';

class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public gender!: string;
  public companyId!: number;
  public city_id!: number;
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
  company_id: {
    type: INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  city_id: {
    type: INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  title_id: {
    type: INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },

}, {
  underscored: true,
  sequelize: db,
  tableName: 'users',
  timestamps: false,
});

User.belongsTo(Company, { foreignKey: 'company_id', as: 'company' });
User.belongsTo(City, { foreignKey: 'city_id', as: 'city' });
User.belongsTo(Role, { foreignKey: 'title_id', as: 'office' });

export default User;
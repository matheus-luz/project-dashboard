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
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  cityId: {
    type: INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  titleId: {
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

Company.hasMany(User, { foreignKey: 'companyId', as: 'idCompany' });
City.hasMany(User, { foreignKey: 'cityId', as: 'idCity' });
Role.hasMany(User, { foreignKey: 'titleId', as: 'idTitle' });

User.belongsTo(Company, { foreignKey: 'companyId', as: 'idCompany' });
User.belongsTo(City, { foreignKey: 'cityId', as: 'idCity' });
User.belongsTo(Role, { foreignKey: 'titleId', as: 'idTitle' });

export default User;
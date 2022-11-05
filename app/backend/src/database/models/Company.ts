import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Company extends Model {
  public id!: number;
  public name!: string;
}

Company.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  tableName: 'companies',
  timestamps: false,
});

export default Company;
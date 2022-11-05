import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Role extends Model {
  public id!: number;
  public name!: string;
}

Role.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    allowNull: false,
    type: STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  tableName: 'role',
  timestamps: false,
});

export default Role;
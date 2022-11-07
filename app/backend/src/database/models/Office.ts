import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Office extends Model {
  public id!: number;
  public name!: string;
}

Office.init({
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
  tableName: 'office',
  timestamps: false,
});

export default Office;
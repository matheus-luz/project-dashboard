import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class City extends Model {
  public id!: number;
  public name!: string;
}

City.init({
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
  tableName: 'cities',
  timestamps: false,
});

export default City;
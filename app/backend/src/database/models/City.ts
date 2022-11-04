import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class City extends Model {
  public id!: number;
  public city!: string;
  public title!: string; 
}

City.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'City',
  timestamps: false,
});

export default City;
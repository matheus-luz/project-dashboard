import Company from '../database/models/Company';
import City from '../database/models/City';
import Client from '../database/models/Client';
import Office from '../database/models/Office';

const connectionTable = {
  include:
      [{
        model: Company,
        as: 'company',
        attributes: { exclude: ['id'] },
      },
      {
        model: City,
        as: 'city',
      },
      {
        model: Office,
        as: 'office',
        attributes: { exclude: ['id'] },
      },
      ],
};

export default class CityService {
  public getAll = async () => {
    const data = await City.findAll();

    return { status: 200, data };
  };

  public findId = async (id: string) => {
    const data = await Client.findByPk(id, connectionTable);

    return {
      status: 200,
      data, 
    };
  };

  public findCityToClient = async (name: string) => {
    const cityFindId = await City.findOne({ where: { name } });
    const data = await Client.findAll(connectionTable);

    if (!cityFindId) {
      return {
        status: 404,
        data: 'Invalid city',
      };
    }
    const response = data.filter((r) => r.city_id === cityFindId.id);

    return {
      status: 200,
      data: response,
    };
  };
}
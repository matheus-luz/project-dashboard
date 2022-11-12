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
        model: Office,
        as: 'office',
        attributes: { exclude: ['id'] },
      },
      ],
};

export default class CityService {
  public getAll = async () => {
    const citites = await City.findAll();

    // const data = citites.map((city) => city);

    return { status: 200, data: citites };
  };

  public findId = async (id: string) => {
    const data = await Client.findByPk(id, connectionTable);

    return {
      status: 200,
      data, 
    };
  };

  public findCityToClient = async (id: string) => {
    const cityFindId = await City.findOne({ where: { id } });
    const clients = await Client.findAll();

    if (!cityFindId) {
      return {
        status: 404,
        data: 'Invalid city',
      };
    }
    const data = clients.filter((client) => client.city_id === cityFindId.id);

    return {
      status: 200,
      data,
    };
  };
}
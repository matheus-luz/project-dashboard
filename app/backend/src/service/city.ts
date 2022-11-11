import City from '../database/models/City';
import Client from '../database/models/Client';
import Company from '../database/models/Company';
import Office from '../database/models/Office';

// import Count from '../utils/functions/count';

// const count = new Count();

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

  public count = async () => { 
    const clients = await Client.findAll();
    // const cities = await City.findAll();
    // const data = count.countClients(clients, cities);

    return { status: 200, data: clients };
  };

  public findId = async (id: string) => {
    const data = await City.findByPk(id, connectionTable);

    return {
      status: 200,
      data, 
    };
  };

  public findCityToClient = async (id: string) => {
    const cityFindId = await City.findOne({ where: { id } });
    const clients = await Client.findAll(connectionTable);

    if (!cityFindId) {
      return {
        status: 404,
        data: 'Invalid city',
      };
    }
    const data = clients
      .filter((response) => response.city_id === cityFindId.id);

    return {
      status: 200,
      data,
    };
  };
}
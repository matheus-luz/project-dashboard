import { IClientUpdate } from '../types/TClient';
import Company from '../database/models/Company';
import City from '../database/models/City';
import User from '../database/models/User';
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
        attributes: { exclude: ['id'] },
      },
      {
        model: Office,
        as: 'office',
        attributes: { exclude: ['id'] },
      },
      ],
};
export default class ClientService {
  // public count = async () => {
  //   // const city = await City.findOne({ where: { name: city } });
  //   // const client = await User.findAll(connectionTableCount);
  //   const city = await City.findAll(connectionTableCount);

  //   // const data = client.map((c) => c.city_id === c.city.id);

  //   // const r = data.map(())

  //   // const filteredCity = city.map((c) => c.id);

  //   // const { count } = await User
  //   //   .findAndCountAll({ where: { filteredCity } });
  //   // const response = client.map((r) => r.city_id === filteredCity);

  //   return { status: 200, data: city };
  // };
  
  public getAll = async () => {
    const data = await User.findAll(connectionTable);

    return { status: 200, data };
  };

  public findId = async (id: string) => {
    const data = await User.findByPk(id, connectionTable);

    return {
      status: 200,
      data, 
    };
  };

  public findCityToClient = async (name: string) => {
    const cityFindId = await City.findOne({ where: { name } });
    const data = await User.findAll(connectionTable);

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

  public updateId = async (body: IClientUpdate, id: string) => {
    const { email, gender, company, city, title } = body;
    const data = await User.update({
      email,
      gender, 
      company_id: company, 
      city_id: city, 
      title_id: title,
    }, { where: { id } });

    return {
      status: 200,
      data,
    };
  };
}
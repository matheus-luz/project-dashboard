import Company from '../database/models/Company';
import City from '../database/models/City';
import User from '../database/models/User';
// import Role from '../database/models/Role';

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
      // {
      //   model: Role,
      //   as: 'idRole',
      //   attributes: { exclude: ['id'] },
      // },
      ],
};

export default class ClientService {
  public count = async () => {
    // const city = await City.findOne({ where: { name: city } });
    const data = await User.findOne();

    return { status: 200, data };
  };
  
  public getAll = async () => {
    const data = await User.findAll(connectionTable);

    return { status: 200, data };
  };

  public findId = async (id: string) => {
    const data = await User.findOne({ where: { id } });

    return {
      status: 200,
      data, 
    };
  };

  public findCityToClient = async (city: string) => {
    const cityFindId = await City.findOne({ where: { name: city } });
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

  public updateId = async (body: any, id: string) => {
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
import { TClientUpdate } from '../types/TClient';
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
      },
      {
        model: Office,
        as: 'office',
        attributes: { exclude: ['id'] },
      },
      ],
};
export default class ClientService {
  public count = async () => { 
    const count = await User.count({
      distinct: true,
      col: 'city_id',
    });

    return { status: 200, data: count };
  };
  
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

  public updateId = async (body: TClientUpdate, id: string) => {
    const { email, gender, companyId, cityId, titleId } = body;
    await User.update({
      email,
      gender, 
      company_id: companyId, 
      city_id: cityId, 
      title_id: titleId,
    }, { where: { id } });

    return {
      status: 200,
      data: 'Updated',
    };
  };
}
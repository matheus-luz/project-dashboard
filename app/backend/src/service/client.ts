import { TClientUpdate } from '../types/TClient';
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
export default class ClientService {
  public getAll = async () => {
    const data = await Client.findAll(connectionTable);

    return { status: 200, data };
  };

  public findId = async (id: string) => {
    const data = await Client.findByPk(id, connectionTable);

    return {
      status: 200,
      data, 
    };
  };

  public updateId = async (body: TClientUpdate, id: string) => {
    const { email, gender, companyId, cityId, titleId } = body;
    await Client.update({
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
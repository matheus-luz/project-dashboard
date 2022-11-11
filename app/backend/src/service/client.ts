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

  public updateId = async (body: TClientUpdate) => {
    const { email, gender, companyId, cityId, titleId } = body;

    const company = await Company.findOne({ where: { name: companyId } });
    const city = await City.findOne({ where: { name: cityId } });
    const title = await Office.findOne({ where: { name: titleId } });

    await Client.update({
      gender, 
      company_id: company?.id, 
      city_id: city?.id, 
      title_id: title?.id,
    }, { where: { email } });

    return {
      status: 200,
      data: 'Updated',
    };
  };
}
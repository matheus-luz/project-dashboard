import User from '../database/models/User';

export default class ClientService {
  public getAll = async () => {
    const data = await User.findAll();

    return { status: 200, data };
  };

  public count = async () => {
    const data = await User.findAndCountAll();

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
    const data = await User.findOne({ where: { city } });

    return {
      status: 200,
      data,
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
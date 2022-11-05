import User from '../database/models/User';

export default class TeamService {
  public count = async () => {
    const data = await User.findAndCountAll();

    return { status: 200, data };
  };

  public findId = async (id: string) => {
    const clientId = await User.findOne({ where: { id } });

    return {
      status: 200,
      data: {
        clientId,
      },
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
      company, 
      city, 
      title,
    }, { where: { id } });

    return {
      status: 200,
      data,
    };
  };
}
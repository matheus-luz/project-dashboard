import User from '../database/models/User';

export default class TeamService {
  public findId = async (id: string) => {
    const clientId = await User.findOne({ where: { id } });

    return {
      status: 200,
      data: {
        clientId,
      },
    };
  };
}
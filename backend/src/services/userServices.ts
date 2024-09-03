import { IUser, IUserModel } from '../interfaces/IUser';
import { ServiceResponse } from '../interfaces/serviceResponse';
import ModelUser from '../model/userModel';

class UserServices {
  constructor(
    private userModel: IUserModel = new ModelUser(),
  ) {}

  public async getUser(userId: number): Promise<ServiceResponse<IUser>> {
    const user = await this.userModel.findById(userId);
    if (!user) return { status: 'NOT_FOUND', data: { message: 'User not found' } };

    const { id, ...dtaUser } = user;

    return { status: 'SUCCESSFUL', data: dtaUser }
  }
}

export default UserServices;

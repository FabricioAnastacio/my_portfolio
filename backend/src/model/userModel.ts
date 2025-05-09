import UserModel from '../database/model/MyCurriculumModel';
import { IUser, IUserModel } from '../interfaces/IUser';

class ModelUser implements IUserModel {
  private model = UserModel;

  async findById(id: number): Promise<IUser | null> {
    const allDtaUser = await this.model.findOne({where: { id }});
    const user = allDtaUser?.dataValues as IUser | null

    return user;
  }
}

export default ModelUser;

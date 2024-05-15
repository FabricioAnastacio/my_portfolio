import UserModel from '../database/model/MyCurriculumModel';
import { IUser, IUserModel } from '../interfaces/IUser';

class ModelUser implements IUserModel {
  private model = UserModel;

  async findById(id: number): Promise<IUser | null> {
    const user = await this.model.findOne({where: { id }});

    return user;
  }
}

export default ModelUser;

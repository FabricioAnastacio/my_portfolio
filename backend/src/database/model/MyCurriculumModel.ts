import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import db from '.';

class UserModel extends Model<InferAttributes<UserModel>,
InferCreationAttributes<UserModel>> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare email: string;

  declare discretion: string;

  declare img: string;
}

UserModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  discretion: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'user',
});

export default UserModel;

import UserModel from '../model/MyCurriculumModel';

const user = UserModel;

async function seedersUser(): Promise<void> {
  await user.create(
    {
      id: 1,
      name: 'Fabricio',
      email: 'fabricio12nastacio@gmail.com',
      discretion: 'asfafdgsssssssssssss',
      img: 'hjkahdfuehf.jpg',
    }
  );
}

export default seedersUser;

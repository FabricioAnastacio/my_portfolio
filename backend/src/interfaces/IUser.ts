export interface IUser {
  id?: number,
  name: string,
  email: string,
  img: string,
  discretion: string,
}

export interface IUserModel {
  findById(id: number): Promise<IUser>, 
}

import { Request, Response } from 'express';
import UserServices from '../services/userServices';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor( 
    private serviceUser = new UserServices(),
  ) {}

  public async findUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status, data } = await this.serviceUser.getUser(Number(id))

    return res.status(mapStatusHTTP(status)).json(data);
  }
}

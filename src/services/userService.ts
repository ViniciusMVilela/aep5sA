import User from '../models/userModel';
import { IUser } from '../types/userType';

export class UserService {
  static async register(username: string, password: string): Promise<IUser> {
    const user = new User({ username, password });
    return await user.save();
  }

  static async login(username: string, password: string): Promise<IUser | null> {
    return await User.findOne({ username, password });
  }
}

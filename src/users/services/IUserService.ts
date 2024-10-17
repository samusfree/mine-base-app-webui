import { User } from "../models/user";


export interface IUserService {
  fetchUsers(): Promise<User[]>;
  createUser(user: User): Promise<User>;
  updateUser(id: string, user: User): Promise<User>;
  deleteUser(id: string): Promise<void>;
}
import { injectable } from "inversify";
import api from "../api/api";
import { IUserService } from "./IUserService";
import { User } from "../models/user";

@injectable()
export class UserService implements IUserService {
  async fetchUsers(): Promise<User[]> {
    const response = await api.get<User[]>("/users");
    return response.data;
  }

  async createUser(user: User): Promise<User> {
    const response = await api.post<User>("/users", user);
    return response.data;
  }

  async updateUser(id: string, user: User): Promise<User> {
    const response = await api.put<User>(`/users/${id}`, user);
    return response.data;
  }

  async deleteUser(id: string): Promise<void> {
    await api.delete(`/users/${id}`);
  }
}

import Cpf from "../../core/entities/Cpf";
import Email from "../../core/entities/Email";
import Phone from "../../core/entities/Phone";
import User from "../../core/entities/User";
import UserRepository from "../../ports/database/UserRepository";

export default class UserMemoryRepository implements UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  async getByCpf(cpf: Cpf): Promise<User | null> {
    const user = this.users.find((user) => user.cpf.getCpf() === cpf.getCpf());
    if (!user) return null;
    return user;
  }
  async getByEmail(email: Email): Promise<User | null> {
    const user = this.users.find((user) => user.email.getEmail() === email.getEmail());
    if (!user) return null;
    return user;
  }
  async getByPhone(phone: Phone): Promise<User | null> {
    const user = this.users.find((user) => user.phone.getPhone() === phone.getPhone());
    if (!user) return null;
    return user;
  }

  async save(user: User): Promise<boolean> {
    this.users.push(user);
    return true
  }
}

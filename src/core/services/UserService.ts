import UserRepository from "../../ports/database/UserRepository";
import Cpf from "../entities/Cpf";
import Email from "../entities/Email";
import Phone from "../entities/Phone";
import User from "../entities/User";

export default class UserService {
  constructor(readonly userRepository: UserRepository) {}

  async save(user: User) {
    if (await this.checkIfExistsTheCpf(user.cpf)) throw new Error("Invalid CPF");
    if(await this.checkIfExistsThePhone(user.phone)) throw new Error("Invalid Phone");
    if(await this.checkIfExistsTheEmail(user.email)) throw new Error("Invalid Email");

    const isCreateUser = await this.userRepository.save(user);
    return isCreateUser;
  }

  async checkIfExistsTheCpf(cpf: Cpf) {
    const cpfExists = await this.userRepository.getByCpf(cpf);
    if (!cpfExists) return false;
    return true;
  }

  async checkIfExistsTheEmail (email: Email) {
      const emailExists = await this.userRepository.getByEmail(email)
      if (!emailExists) return false;
      return true;
  }

  async checkIfExistsThePhone(phone: Phone) {
    const phoneExists = await this.userRepository.getByPhone(phone);
    if (!phoneExists) return false;
    return true;
  }
}

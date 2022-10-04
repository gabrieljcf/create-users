import Cpf from "../../core/entities/Cpf";
import Email from "../../core/entities/Email";
import Phone from "../../core/entities/Phone";
import User from "../../core/entities/User";

export default interface UserRepository {
  save(user: User): Promise<boolean>;
  getByCpf(cpf: Cpf): Promise<User | null>;
  getByEmail(email: Email): Promise<User | null>;
  getByPhone(phone: Phone): Promise<User | null>;
}

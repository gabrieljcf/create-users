import Cpf from "./Cpf";
import Email from "./Email";
import Phone from "./Phone";

export default class User {
    constructor (readonly name: string, readonly cpf: Cpf, readonly phone: Phone, readonly email: Email) {}
}
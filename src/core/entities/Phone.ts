export default class Phone {
  private readonly value: string = "";
  constructor(phone: string) {
    if (!this.validate(phone)) throw new Error("Invalid Phone");
    this.value = phone;
  }

  validate(value: string) {
    if(!value) return false;
    if (value.length < 11 || value.length > 11) return false;
    return true;
  }

  getPhone () {
    return this.value;
  }
}

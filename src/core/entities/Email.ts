export default class Email {
  private readonly value: string = "";
  private EMAIL_VALIDATOR =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(email: string) {
    if (!this.validate(email)) throw new Error ("Invalid Email");
    this.value = email;
  }

  validate(value: string) {
    if(!value) return false;
    const isValidEmail = value.toLowerCase().match(this.EMAIL_VALIDATOR);
    if (!isValidEmail) return false;
    return true;
  }

  getEmail() {
    return this.value;
  }
}

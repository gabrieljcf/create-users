import Email from "../src/core/entities/Email";

test("Should be able to create a email", () => {
  const validEmail = "gabriel@email.com";
  const email = new Email(validEmail);
  expect(email.getEmail()).toBe(validEmail);
});

test("Should not be able to create a email with invalid email", () => {
  expect(() => new Email("gabriel@email")).toThrowError("Invalid Email");
});

test("Should not be able to create a email with empty value", () => {
  expect(() => new Email("")).toThrowError("Invalid Email");
});

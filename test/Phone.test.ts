import Phone from "../src/core/entities/Phone";

test("Should be able to create a phone", () => {
  const validPhone = "75999999999";
  const phone = new Phone(validPhone);
  expect(phone.getPhone()).toBe(validPhone);
});

test("Should not be able to create a phone with invalid phone", () => {
  expect(() => new Phone("111111")).toThrowError("Invalid Phone");
});

test("Should not be able to create a phone with empty value", () => {
  expect(() => new Phone("")).toThrowError("Invalid Phone"); });

import UserMemoryRepository from "../src/adapters/in-memory-database/UserMemoryRepository";
import Cpf from "../src/core/entities/Cpf";
import Email from "../src/core/entities/Email";
import Phone from "../src/core/entities/Phone";
import User from "../src/core/entities/User";
import UserService from "../src/core/services/UserService";

test("Should be able to create a new user", async () => {
  const userRepository = new UserMemoryRepository();
  const user = new User(
    "Gabriel Nogueira",
    new Cpf("886.634.854-68"),
    new Phone("75982089301"),
    new Email("gabriel@email.com")
  );

  const userService = new UserService(userRepository);
  const response = await userService.save(user);
  expect(response).toBe(true);
});

test("Should not be able to create a user with a cpf that is already registered", async () => {
  const userRepository = new UserMemoryRepository();

  const user = new User(
    "Gabriel Nogueira",
    new Cpf("886.634.854-68"),
    new Phone("75982089301"),
    new Email("gabriel@email.com")
  );

  const userService = new UserService(userRepository);
  const response = await userService.save(user);
  expect(response).toBe(true);

  await expect(userService.save(user)).rejects.toThrowError(new Error("Invalid CPF"));
});

test("Should not be able to create a user with a phone that is already registered", async () => {
  const userRepository = new UserMemoryRepository();

  const user = new User(
    "Gabriel Nogueira",
    new Cpf("886.634.854-68"),
    new Phone("75982089301"),
    new Email("gabriel@email.com")
  );

  const userService = new UserService(userRepository);
  const response = await userService.save(user);
  expect(response).toBe(true);

  const user2 = new User(
    "Gabriel Nogueira",
    new Cpf("473.087.668-70"),
    new Phone("75982089301"),
    new Email("gabriel@email.com")
  );

  await expect(userService.save(user2)).rejects.toThrowError(new Error("Invalid Phone"));
});

test("Should not be able to create a user with a email that is already registered", async () => {
  const userRepository = new UserMemoryRepository();

  const user = new User(
    "Gabriel Nogueira",
    new Cpf("886.634.854-68"),
    new Phone("75982089301"),
    new Email("gabriel@email.com")
  );

  const userService = new UserService(userRepository);
  const response = await userService.save(user);
  expect(response).toBe(true);

  const user2 = new User(
    "Gabriel Nogueira",
    new Cpf("473.087.668-70"),
    new Phone("75982089302"),
    new Email("gabriel@email.com")
  );

  await expect(userService.save(user2)).rejects.toThrowError(new Error("Invalid Email"));
});
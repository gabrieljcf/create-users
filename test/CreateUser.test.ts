import UserMemoryRepository from "../src/adapters/in-memory-database/UserMemoryRepository";
import CreateUser from "../src/core/use-case/CreateUser";

test("Should be able to create a new user", async () => {
  const userRepository = new UserMemoryRepository();
  const input = {
    name: "Gabriel Nogueira",
    cpf: "886.634.854-68",
    phone: "75982089301",
    email: "gabriel@email.com",
  };

  const createUser = new CreateUser(userRepository);
  const response = await createUser.execute(input);
  expect(response).toBe(true);
});

test("Should not be able to create a user with a cpf that is already registered", async () => {
  const userRepository = new UserMemoryRepository();

  const input = {
    name: "Gabriel Nogueira",
    cpf: "886.634.854-68",
    phone: "75982089301",
    email: "gabriel@email.com",
  };

  const createUser = new CreateUser(userRepository);
  const response = await createUser.execute(input);
  expect(response).toBe(true);

  await expect(createUser.execute(input)).rejects.toThrowError(
    new Error("Invalid CPF")
  );
});

test("Should not be able to create a user with a phone that is already registered", async () => {
  const userRepository = new UserMemoryRepository();

  const input = {
    name: "Gabriel Nogueira",
    cpf: "886.634.854-68",
    phone: "75982089301",
    email: "gabriel@email.com",
  };

  const createUser = new CreateUser(userRepository);
  const response = await createUser.execute(input);
  expect(response).toBe(true);

  await expect(
    createUser.execute({
      ...input,
      cpf: "473.087.668-70",
    })
  ).rejects.toThrowError(new Error("Invalid Phone"));
});

test("Should not be able to create a user with a email that is already registered", async () => {
  const userRepository = new UserMemoryRepository();

  const input = {
    name: "Gabriel Nogueira",
    cpf: "886.634.854-68",
    phone: "75982089301",
    email: "gabriel@email.com",
  };

  const createUser = new CreateUser(userRepository);
  const response = await createUser.execute(input);
  expect(response).toBe(true);

  await expect(
    createUser.execute({
      ...input,
      cpf: "473.087.668-70",
      phone: "75982089356",
    })
  ).rejects.toThrowError(new Error("Invalid Email"));
});

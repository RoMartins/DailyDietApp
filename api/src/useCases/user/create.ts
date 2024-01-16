interface createUserSchema {
  name: string,
  height: string,
  weight: string, 
  age: boolean
}

export class CreateUserUseCase {

  async execute({
    age,
    height,
    name,
    weight
  }: createUserSchema) {

  }
}
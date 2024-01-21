import { Prisma } from "prisma/prisma-client";
import { prisma } from "../../lib/prisma";


export class CreateUserUseCase {

  async execute({
    age,
    height,
    name,
    weight,
    email,
    password_hash
  }: Prisma.UserCreateInput) {

    const user = await prisma.user.create({
      data: {
        age,
        email,
        height,
        name,
        password_hash,
        weight,
      }
    })

    return {
      user
    }

  }
}
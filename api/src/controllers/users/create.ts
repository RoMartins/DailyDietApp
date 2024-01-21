import { FastifyReply, FastifyRequest } from "fastify";
import { CreateMealUseCase } from "../../useCases/create-meal";
import { CreateUserUseCase } from "../../useCases/user/create";
import {hash} from 'bcryptjs'

interface createUserBody {
  name: string,
  email: string,
  password: string,
  height: string,
  weight: string, 
  age: number
}

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const {name, age, height, weight, email, password} = request.body as createUserBody
  const CreateUser = new CreateUserUseCase()

  const password_hash = await hash(password,6
    )
  const user = await CreateUser.execute({
    name, age, height, weight, email,
    password_hash,
  })

  
  reply.status(201).send({
    user
})

}
import { FastifyReply, FastifyRequest } from "fastify";
import { CreateMealUseCase } from "../../useCases/create-meal";
import { CreateUserUseCase } from "../../useCases/user/create";

interface createUserBody {
  name: string,
  height: string,
  weight: string, 
  age: boolean
}

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const {name, age, height, weight} = request.body as createUserBody
  const CreateUser = new CreateUserUseCase()
  const user = await CreateUser.execute({
    name, age, height, weight
  })

  
  reply.status(201).send({
    user
})

}
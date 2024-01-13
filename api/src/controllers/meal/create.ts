import { FastifyReply, FastifyRequest } from "fastify";
import { CreateMealUseCase } from "../../useCases/create-meal";

interface createMealBody {
  description : string, 
  name: string, 
  inTheDiet: boolean
}

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const {description, inTheDiet, name} = request.body as createMealBody
  const CreateMeal = new CreateMealUseCase()
  const meal = await CreateMeal.execute({
    description, 
    inTheDiet,
    name
  })

  
  reply.status(201).send({
    meal
})

}
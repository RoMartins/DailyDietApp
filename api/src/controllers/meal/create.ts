import { FastifyReply, FastifyRequest } from "fastify";
import { CreateMealUseCase } from "../../useCases/create-meal";

interface createMealBody {
  description : string, 
  name: string, 
  inTheDiet: boolean,
  date : string
  time : string
}

export async function create(request: FastifyRequest, reply: FastifyReply) {

  const { 
      description, 
      inTheDiet, 
      name,
      date,
      time,
    } = request.body as createMealBody

  const CreateMeal = new CreateMealUseCase()

  const meal = await CreateMeal.execute({
    description, 
    inTheDiet,
    name,
    date,
    time,
    user_id: request.user.sub
  })

  
  reply.status(201).send({
    meal
})

}
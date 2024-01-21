import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateMealUseCase } from "../../useCases/meal/update";

interface createMealBody {
  description: string
  name: string
  inTheDiet: boolean
  date : string
  time : string
}

interface UpdateMealParams {
 id: string
}
export async function updateMeal(request: FastifyRequest, reply: FastifyReply) {
  const {
    description, 
    inTheDiet, 
    name,
    date,
    time,
} = request.body as createMealBody

const {id} = request.params as UpdateMealParams

  const mealUpdate = new UpdateMealUseCase()

  const mealUpdated = await mealUpdate.execute({
    description, 
    inTheDiet,
    name,
    date,
    time,
    id
  })

  
  reply.status(201).send({
    mealUpdated
})

}
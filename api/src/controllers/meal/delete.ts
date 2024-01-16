import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteMealUseCase } from "../../useCases/delete-meal";

interface deleteParams {
  id: string
}

export async function deleteMeal(request: FastifyRequest, reply: FastifyReply) {
 
  const {id} = request.params as deleteParams

  const deleteMeal = new DeleteMealUseCase()
  
   await deleteMeal.execute({id})

   reply.status(200)

}
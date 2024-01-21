import { FastifyReply, FastifyRequest } from "fastify";
import { GetDetailMealUseCase } from "../../useCases/meal/get-details-meal";


export interface GetDetailsMealParams {
  id: string
}
export async function getDetailsMeal(request:FastifyRequest,reply: FastifyReply) {

  const { id } = request.params as GetDetailsMealParams

  const getDetailMeal= new GetDetailMealUseCase()
  const meal = await getDetailMeal.execute({
    id
  })


  console.log(meal)
  reply.status(200).send({
    meal
  })


}
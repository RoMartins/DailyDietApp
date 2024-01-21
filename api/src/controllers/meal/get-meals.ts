import { FastifyReply, FastifyRequest } from "fastify";
import { GetMealsUseCase } from "../../useCases/meal/get-meals";

export async function getMeals(request: FastifyRequest, reply: FastifyReply) {

  const user_id = '11d82988-f123-4904-b62a-319abab7aad0'

  const getMeals = new GetMealsUseCase()

  const meals = await getMeals.execute({
    user_id
  })

  reply.status(201).send({
    meals
})
}
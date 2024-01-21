import fastify, { FastifyInstance } from "fastify";
import { create } from "./create";
import { deleteMeal } from "./delete";
import { updateMeal } from "./update";
import { getMeals } from "./get-meals";
import { getDetailsMeal } from "./get-details-meal";
import { verifyJWT } from "../../middlewares/verifyJWT";

export async function mealRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)
  app.post('/meal', create)
  app.delete('/meal/:id', deleteMeal)
  app.put('/meal/:id', updateMeal)
  app.get('/meal/list', getMeals)
  app.get('/meal/list/:id', getDetailsMeal)

}
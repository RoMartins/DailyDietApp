import { FastifyInstance } from "fastify";
import { create } from "./create";
import { deleteMeal } from "./delete";

export async function mealRoutes(app: FastifyInstance) {
  app.post('/meal', create)
  app.delete('/:id', deleteMeal)
}
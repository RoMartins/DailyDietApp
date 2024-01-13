import { FastifyInstance } from "fastify";
import { create } from "./create";

export async function mealRoutes(app: FastifyInstance) {
  app.post('/meal', create)
}
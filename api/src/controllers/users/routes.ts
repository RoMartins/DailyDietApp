import { FastifyInstance } from "fastify";
import { createUser } from "./create";
import { getUserMetrics } from "./get-metrics";
import { authenticateUser } from "./authenticate";

export async function userRoutes(app: FastifyInstance) {
  app.post('/user', createUser)
  app.get('/user/metrics', getUserMetrics)
  app.post('/user/auth', authenticateUser)
}
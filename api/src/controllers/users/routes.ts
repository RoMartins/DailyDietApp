import { FastifyInstance } from "fastify";
import { createUser } from "./create";
import { getUserMetrics } from "./get-metrics";
import { authenticateUser } from "./authenticate";
import { verifyJWT } from "../../middlewares/verifyJWT";

export async function userRoutes(app: FastifyInstance) {
  app.post('/user', createUser)
  app.get('/user/metrics',{onRequest: [verifyJWT]}, getUserMetrics)
  app.post('/user/auth', authenticateUser)
}
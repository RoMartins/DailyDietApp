import { FastifyReply, FastifyRequest } from "fastify";
import { GetUserMetricsUseCase } from "../../useCases/user/get-metrics";

export async function getUserMetrics(request: FastifyRequest, reply: FastifyReply) {

  const user_id = '11d82988-f123-4904-b62a-319abab7aad0'

  const getMetrics = new GetUserMetricsUseCase()


  const metrics = await getMetrics.execute({user_id})

  reply.status(201).send({
    metrics
  })

}
import { FastifyReply, FastifyRequest } from "fastify";
import { GetUserMetricsUseCase } from "../../useCases/user/get-metrics";

export async function getUserMetrics(request: FastifyRequest, reply: FastifyReply) {

  const {sub} =  request.user

  const getMetrics = new GetUserMetricsUseCase()


  const metrics = await getMetrics.execute({user_id : sub})

  reply.status(201).send({
    metrics
  })

}
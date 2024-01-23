import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { AuthenticateUseCase } from '../../useCases/user/Authenticate'

export async function authenticateUser(request:  FastifyRequest, reply: FastifyReply) {
    const authenticateBodySchema = z.object({
        email: z.string().email(),
        password: z.string().min(6)
    })

    const {email, password} = authenticateBodySchema.parse(request.body)

        const authenticateUseCase = new AuthenticateUseCase()

        const {user} = await authenticateUseCase.execute({
            email,
            password
        })
        

        const token = await reply.jwtSign({}, {
            sign: {
                sub: user.id
            }
        })

        return reply.status(200).send({
            token
        })
}
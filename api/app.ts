import 'dotenv/config'
import fastify from 'fastify'
import { mealRoutes } from './src/controllers/meal/routes'
import { userRoutes } from './src/controllers/users/routes'
import fastifyJwt from '@fastify/jwt'

export const app = fastify()
const jwtSecret  = process.env.JWT_SECRET

if(!jwtSecret) {
  throw new Error('invalid credentials')
}

app.register(fastifyJwt, {
  secret: jwtSecret
})

app.register(mealRoutes)
app.register(userRoutes)


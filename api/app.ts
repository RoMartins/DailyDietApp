import fastify from 'fastify'
import { mealRoutes } from './src/controllers/meal/routes'

export const app = fastify()

app.register(mealRoutes)


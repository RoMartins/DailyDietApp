import fastify from 'fastify'
import { mealRoutes } from './src/controllers/meal/routes'
import { userRoutes } from './src/controllers/users/routes'

export const app = fastify()

app.register(mealRoutes)
app.register(userRoutes)


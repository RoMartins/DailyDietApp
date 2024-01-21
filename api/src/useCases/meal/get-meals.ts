import { Prisma } from "prisma/prisma-client"
import { prisma } from "../../lib/prisma"

interface GetMealRequest {
  user_id: string
}

export class GetMealsUseCase {

  async execute({
    user_id
  }: GetMealRequest) {

    const meals = await prisma.meal.findMany({
      where: {
        user_id
      }
    })
  
    return meals
    

  }
}
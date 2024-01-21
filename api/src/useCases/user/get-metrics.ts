import { prisma } from "../../lib/prisma"

interface GetUserMetricsRequest {
  user_id: string
}

export class GetUserMetricsUseCase {

  async execute({user_id} : GetUserMetricsRequest) {
    const totalMeals = await prisma.meal.findMany({
      where: {
        user_id
      }
    })

    const metrics = totalMeals.reduce(
      (acc, meal) => {
        if (meal.inTheDiet) {
          acc.currentSequence += 1
          acc.totalMealOnDiet +=1
        } else {
          acc.currentSequence = 0
          acc.totalMealOffDiet +=1

        }

        if (acc.currentSequence > acc.bestOnDietSequence) {
          acc.bestOnDietSequence = acc.currentSequence
        }

        return acc
      },
      { bestOnDietSequence: 0, currentSequence: 0, totalMealOnDiet: 0 , totalMealOffDiet: 0},
    )

  console.log(metrics)
    
   return metrics
    
  }
}
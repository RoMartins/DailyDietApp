import { GetDetailsMealParams } from "../../controllers/meal/get-details-meal";
import { prisma } from "../../lib/prisma";



export class GetDetailMealUseCase {

  async execute({
    id
  } : GetDetailsMealParams) {
    console.log(id)
    const meal = await prisma.meal.findUnique({
      where : {
        id
      }
    })

    return meal
  }
}
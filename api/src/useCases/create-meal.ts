import {  Prisma } from "prisma/prisma-client"
import { prisma } from "../lib/prisma"



export class CreateMealUseCase {
  
  async execute({
    description,
    inTheDiet,
    name,
    date,
    time,
    user_id
  }:Prisma.MealUncheckedCreateInput) {
    const meal = await prisma.meal.create({
     data: {inTheDiet,
      name,
      description,
      date,
      time,
      user_id,
} as Prisma.MealUncheckedCreateInput
    })

    return {
      meal
    }
  }
}
import {  Prisma } from "prisma/prisma-client"
import { prisma } from "../lib/prisma"

interface createMealRequest {
  name: string 
  description : string
  inTheDiet: boolean
}

export class CreateMealUseCase {
  
  async execute({
    description,
    inTheDiet,
    name
  }:createMealRequest) {
    const meal = await prisma.meal.create({
     data: {inTheDiet,
      name,
      description} as Prisma.MealCreateInput
    })

    return {
      meal
    }
  }
}
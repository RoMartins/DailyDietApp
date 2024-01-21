import {  Prisma } from "prisma/prisma-client"
import { prisma } from "../../lib/prisma"

interface UpdateMealSchema {
  description : string
  inTheDiet : boolean
  name : string
  date : string
  time : string
  id : string
}

export class UpdateMealUseCase {
  
  async execute({
    description,
    inTheDiet,
    name,
    date,
    time,
    id,
  }: UpdateMealSchema) {
    const mealUpdated = await prisma.meal.update({
      where: {
        id
      },
      data : {
        date,
        description,
        name,
        time,
        inTheDiet,
      }
    })

    return {
      mealUpdated
    }
  }
}
import { prisma } from "../lib/prisma"

interface DeleteMealRequest {
  id: string 
 
}

export class DeleteMealUseCase {
  
  async execute({
   id
  }:DeleteMealRequest) {
      await prisma.meal.delete({
        where : {
          id
        }
      })
      return
  }

}
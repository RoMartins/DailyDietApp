import { compare } from "bcryptjs"
import { prisma } from "../../lib/prisma"

interface AuthenticateRequest {
  email: string
  password: string
}

export class AuthenticateUseCase {

  async execute({email, password}: AuthenticateRequest) {

    
      const user = await prisma.user.findFirst({
        where: {
          email, 
        },
      })

      if(!user) {
        throw new Error()
    }

      const doesPasswordMatch = await compare(password, user.password_hash)

      if(!doesPasswordMatch) {
        throw new Error('invalid credentials')

      }

      return {
        user
      }

  }


}


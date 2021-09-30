import { client } from '../../prisma/client'

class GetUserByEmailUseCase {
  async execute(email: string) {
    const user = await client.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        isAdmin: true,
        skills: true,
      },
    })

    return user
  }
}

export { GetUserByEmailUseCase }

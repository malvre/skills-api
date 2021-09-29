import { client } from '../prisma/client'

class DeleteUserUseCase {
  async execute(id: string) {
    const deletedUser = await client.user.delete({
      where: {
        id,
      },
      include: {
        skills: true,
      },
    })
    return deletedUser
  }
}

export { DeleteUserUseCase }

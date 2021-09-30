import { client } from '../../prisma/client'

class RemoveSkillFromUserUseCase {
  async execute(userSkillId: string) {
    const deletedUserSkill = await client.userSkill.delete({
      where: {
        id: userSkillId,
      },
    })
    return deletedUserSkill
  }
}

export { RemoveSkillFromUserUseCase }

import { client } from '../../prisma/client'

class DeleteSkillUseCase {
  async execute(id: string) {
    const deletedSkill = await client.skill.delete({
      where: {
        id,
      },
    })
    return deletedSkill
  }
}

export { DeleteSkillUseCase }

import { client } from '../../prisma/client'

class DeleteSkillUseCase {
  async execute(id: string) {
    // find occurrences
    const countUsers = await client.userSkill.count({
      where: {
        skillId: id,
      },
    })

    if (countUsers > 0) {
      throw new Error('Skill is being used by one or more users')
    }

    // delete skill
    const deletedSkill = await client.skill.delete({
      where: {
        id,
      },
    })
    return deletedSkill
  }
}

export { DeleteSkillUseCase }

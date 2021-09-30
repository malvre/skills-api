import { client } from '../../prisma/client'

class GetSkillUseCase {
  async execute(id: string) {
    const skill = await client.skill.findUnique({
      where: {
        id,
      },
    })

    return skill
  }
}

export { GetSkillUseCase }

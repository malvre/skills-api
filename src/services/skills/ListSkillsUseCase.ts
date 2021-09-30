import { client } from '../../prisma/client'

class ListSkillsUseCase {
  async execute() {
    const skills = await client.skill.findMany({
      orderBy: {
        name: 'asc',
      },
    })
    return skills
  }
}

export default ListSkillsUseCase

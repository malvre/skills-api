import { client } from '../../prisma/client'

interface IRequest {
  id: string
  name: string
}

class UpdateSkillUseCase {
  async execute({ id, name }: IRequest) {
    // validações
    if (!name) {
      throw new Error('Name is empty')
    }

    // atualiza skill
    const updatedSkill = await client.skill.update({
      where: {
        id,
      },
      data: {
        name: name.toLocaleLowerCase().trim(),
      },
    })

    return updatedSkill
  }
}

export { UpdateSkillUseCase }

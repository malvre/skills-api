import { client } from '../../prisma/client'

class CreateSkillUseCase {
  async execute(name: string) {
    // verifica se skill já existe
    const skillAlreadyExists = await client.skill.findFirst({
      where: {
        name: name.toLocaleLowerCase().trim(),
      },
    })
    if (skillAlreadyExists) {
      throw new Error('Skill already exists')
    }

    if (!name) {
      throw new Error('Name is empty')
    }

    const skill = await client.skill.create({
      data: {
        name: name.toLocaleLowerCase().trim(),
      },
    })

    return skill
  }
}

export { CreateSkillUseCase }

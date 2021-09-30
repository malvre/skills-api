import { client } from '../../prisma/client'

interface IRequest {
  userId: string
  skillId: string
}

class AddSkillIntoUserUseCase {
  async execute({ userId, skillId }: IRequest) {
    const user = await client.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (!user) {
      throw new Error('User not found')
    }

    const skill = await client.skill.findUnique({
      where: {
        id: skillId,
      },
    })
    if (!skill) {
      throw new Error('Skill not found')
    }

    const alreadyExists = await client.userSkill.findFirst({
      where: {
        userId,
        skillId,
      },
    })
    if (alreadyExists) {
      throw new Error('User already has this skill')
    }

    await client.userSkill.create({
      data: {
        userId,
        skillId,
      },
    })

    console.log(user)
  }
}

export { AddSkillIntoUserUseCase }

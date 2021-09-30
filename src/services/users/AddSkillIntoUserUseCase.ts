import { Skill } from '.prisma/client'
import { client } from '../../prisma/client'

interface IRequest {
  userId: string
  skillName: string
  value: number
}

class AddSkillIntoUserUseCase {
  skill!: Skill

  async execute({ userId, skillName, value }: IRequest) {
    // find user
    const user = await client.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (!user) {
      throw new Error('User not found')
    }

    // find by skill name
    const searchSkill = await client.skill.findFirst({
      where: {
        name: skillName.toLocaleLowerCase().trim(),
      },
    })

    // if not exists...
    if (!searchSkill) {
      const newSkill = await client.skill.create({
        data: {
          name: skillName.toLocaleLowerCase().trim(),
        },
      })
      this.skill = newSkill
    } else {
      this.skill = searchSkill
    }

    // check if user skill already exists
    const userSkillAlreadyExists = await client.userSkill.findFirst({
      where: {
        userId: user.id,
        skillId: this.skill.id,
      },
    })
    if (userSkillAlreadyExists) {
      throw new Error('User already has this skill')
    }

    // add skill to user
    const userSkill = await client.userSkill.create({
      data: {
        userId: user.id,
        skillId: this.skill.id,
        value,
      },
    })

    return userSkill
  }
}

export { AddSkillIntoUserUseCase }

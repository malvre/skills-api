import { AddSkillIntoUserUseCase } from '../src/services/users/AddSkillIntoUserUseCase'
import { GetUserByEmailUseCase } from '../src/services/users/GetUserByEmailUseCase'
import { CreateSkillUseCase } from '../src/services/skills/CreateSkillUseCase'

test('Should add skill into user', async () => {
  // get user
  const getUserByEmailUseCase = new GetUserByEmailUseCase()
  const user = await getUserByEmailUseCase.execute('malvre@gmail.com')

  // create a skill
  const createSkillUseCase = new CreateSkillUseCase()
  const newSkill = await createSkillUseCase.execute('test skill')

  const addSkillIntoUserUseCase = new AddSkillIntoUserUseCase()
  const data = await addSkillIntoUserUseCase.execute({
    userId: user.id,
    skillId: newSkill.id,
  })

  console.log(data)

  expect(data).toBeDefined()
})

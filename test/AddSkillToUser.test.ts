import { GetUserByEmailUseCase } from '../src/services/users/GetUserByEmailUseCase'
import { AddSkillIntoUserUseCase } from '../src/services/users/AddSkillIntoUserUseCase'
import { RemoveSkillFromUserUseCase } from '../src/services/users/RemoveSkillFromUserUseCase'
import { DeleteSkillUseCase } from '../src/services/skills/DeleteSkillUseCase'

let userSkillId: string
let skillId: string

test('Should add a new skill to user', async () => {
  // find user
  const getUserByEmailUseCase = new GetUserByEmailUseCase()
  const searchUser = await getUserByEmailUseCase.execute('malvre@gmail.com')

  // add skill to user
  const addSkillIntoUserUseCase = new AddSkillIntoUserUseCase()
  const userSkill = await addSkillIntoUserUseCase.execute({
    userId: searchUser!.id,
    skillName: 'New Skill',
    value: 2,
  })
  userSkillId = userSkill.id
  skillId = userSkill.skillId

  expect(userSkill.value).toBe(2)
})

// test('Should throw error on delete a skill', async () => {
//   const deleteSkillUseCase = new DeleteSkillUseCase()
//   expect(async () => {
//     await deleteSkillUseCase.execute(skillId)
//   }).toThrow()
// })

test('Should remove a skill from user', async () => {
  const removeSkillfromUserUseCase = new RemoveSkillFromUserUseCase()
  const userSkillRemoved = await removeSkillfromUserUseCase.execute(userSkillId)

  expect(userSkillRemoved.id).toBe(userSkillId)
})

test('Should delete a skill', async () => {
  const deleteSkillUseCase = new DeleteSkillUseCase()
  const skillDeleted = await deleteSkillUseCase.execute(skillId)

  expect(skillDeleted.id).toBe(skillId)
})

import { CreateSkillUseCase } from '../src/services/skills/CreateSkillUseCase'
import { DeleteSkillUseCase } from '../src/services/skills/DeleteSkillUseCase'

let id: string

test('Should create a skill', async () => {
  const createSkillUseCase = new CreateSkillUseCase()
  const newSkill = await createSkillUseCase.execute('Test Skill')
  id = newSkill.id

  expect(newSkill.name).toBe('test skill')
})

test('Should delete a skill', async () => {
  const deleteSkillUseCase = new DeleteSkillUseCase()
  const deletedSkill = await deleteSkillUseCase.execute(id)

  expect(deletedSkill.id).toBe(id)
})

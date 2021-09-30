import { CreateUserUseCase } from '../src/services/users/CreateUserUseCase'
import { DeleteUserUseCase } from '../src/services/users/DeleteUserUseCase'

let id: string

test('Should create user', async () => {
  const createUserUseCase = new CreateUserUseCase()
  const newUser = await createUserUseCase.execute({
    name: 'Usuário Teste da Silva',
    email: 'usuario.teste@email.com',
    password: '123456',
    bio: 'To be or not to be, thats the question',
  })
  id = newUser.id

  expect(newUser.id).toBeDefined()
})

test('Should delete user', async () => {
  const deleteUserUseCase = new DeleteUserUseCase()
  const deletedUser = await deleteUserUseCase.execute(id)

  expect(deletedUser.id).toBeDefined()
})

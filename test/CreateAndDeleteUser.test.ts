import { CreateUserUseCase } from '../src/services/users/CreateUserUseCase'
import { DeleteUserUseCase } from '../src/services/users/DeleteUserUseCase'

let id: string

test('Should create an user', async () => {
  const user = {
    name: 'Usuário Teste da Silva',
    email: 'usuario.teste@email.com',
    bio: 'Trabalha com banco de dados',
    password: '123456',
  }

  const createUserUseCase = new CreateUserUseCase()
  const newUser = await createUserUseCase.execute(user)
  id = newUser.id

  expect(user.name).toBe(newUser.name)
})

test('Should delete an user', async () => {
  const deleteUserUseCase = new DeleteUserUseCase()
  const deletedUser = await deleteUserUseCase.execute(id)

  expect(deletedUser.id).toBe(id)
})

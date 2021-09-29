import { CreateUserUseCase } from '../src/services/CreateUserUseCase'
import { DeleteUserUseCase } from '../src/services/DeleteUserUseCase'

test('Should create an user', async () => {
  const user = {
    name: 'Usuário Teste da Silva',
    email: 'usuario.teste@email.com',
    bio: 'Trabalha com banco de dados',
    password: '123456',
  }

  const createUserUseCase = new CreateUserUseCase()
  const newUser = await createUserUseCase.execute(user)

  expect(user.name).toBe(newUser.name)

  const deleteUserUseCase = new DeleteUserUseCase()
  const deletedUser = await deleteUserUseCase.execute(newUser.id)
})

import { AuthenticateUserUseCase } from '../src/services/auth/AuthenticateUserUseCase'
import { CreateUserUseCase } from '../src/services/users/CreateUserUseCase'
import { GetUserByEmailUseCase } from '../src/services/users/GetUserByEmailUseCase'

test('Should login user', async () => {
  // procura um usuário
  const getUserByEmailUseCase = new GetUserByEmailUseCase()
  const searchUser = await getUserByEmailUseCase.execute('malvre@gmail.com')

  // se não existe, cria
  if (!searchUser) {
    const createUserUseCase = new CreateUserUseCase()
    const newUser = await createUserUseCase.execute({
      name: 'Marcelo Rezende',
      email: 'malvre@gmail.com',
      password: '123456',
      bio: 'Turn coffee iunto code',
    })
  }

  const authenticateUserUseCase = new AuthenticateUserUseCase()
  const data = await authenticateUserUseCase.execute({
    email: 'malvre@gmail.com',
    password: '123456',
  })

  expect(data.token).toBeDefined()
})

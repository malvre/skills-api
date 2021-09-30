import { AuthenticateUserUseCase } from '../src/services/auth/AuthenticateUserUseCase'

test('Should do login', async () => {
  const loginData = {
    email: 'malvre@gmail.com',
    password: '123456',
  }

  const authenticateUserUseCase = new AuthenticateUserUseCase()
  const userLogged = await authenticateUserUseCase.execute(loginData)

  expect(userLogged.token).toBeDefined()
})

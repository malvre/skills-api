import { Request, Response } from 'express'
import { CreateUserUseCase } from '../services/users/CreateUserUseCase'

class CreateUserController {
  static async handle(req: Request, res: Response) {
    const { name, email, password, bio } = req.body
    const createUserUseCase = new CreateUserUseCase()
    const user = await createUserUseCase.execute({
      name,
      email,
      password,
      bio,
    })

    res.json(user)
  }
}

export { CreateUserController }

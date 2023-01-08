import { Request, Response } from "express";
import { AuthenticateDeliverboyUseCase } from "./authenticateDeliverboyUseCase";


export class AuthenticateDeliverboyController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateClientUseCase = new AuthenticateDeliverboyUseCase();
    const result = await authenticateClientUseCase.execute({
      username,
      password
    });

    return response.json(result); 
  }
}
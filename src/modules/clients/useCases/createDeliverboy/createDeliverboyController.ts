import { Request, Response } from "express";
import { CreateDeliverboyUseCase } from "./createDeliverboyUseCase";


export class CreateDeliverboyController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createDeliverboyUseCase = new CreateDeliverboyUseCase();
    const result = await createDeliverboyUseCase.execute({
      username,
      password
    });

    return response.json(result); 
  }
}
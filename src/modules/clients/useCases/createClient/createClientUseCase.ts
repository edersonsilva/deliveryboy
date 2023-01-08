import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {

  async execute({username, password}: ICreateClient) {
    // Validar se o usuario existe;
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
        }
      }
    })

    if(clientExist) {
      throw new Error("User exists!")
    }

    // Criptografar a senha
    const saltRounds = 10;
    const hashPassword = await hash(password, saltRounds);

    // Salva o client
    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword
      }
    });

    return client;

    
  }
}
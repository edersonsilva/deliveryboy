import { prisma } from "../../../database/prismaClient";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';


interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {

  async execute({ username, password }: IAuthenticateClient) {
    // Receber usename e password


    // Verificar se username cadastrado
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    });

    if (!client) {
      throw new Error("Username or password invalid!"); 
    }

    // Verificar se senha correspone ao username
    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Password invalid!");
    }

    const token = sign({ username }, "c015d60b513ec13db8c013f8984a4051", { 
      subject: client.id,
      expiresIn: "1d"     
    });
      
    return token;
  }
}
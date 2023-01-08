import { prisma } from "../../../database/prismaClient";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';


interface IAuthenticateDeliverboy {
  username: string;
  password: string;
}

export class AuthenticateDeliverboyUseCase {

  async execute({ username, password }: IAuthenticateDeliverboy) {
    // Receber usename e password


    // Verificar se username cadastrado
    const deliveryboy = await prisma.deliverboy.findFirst({
      where: {
        username
      }
    });

    if (!deliveryboy) {
      throw new Error("Username or password invalid!"); 
    }

    // Verificar se senha correspone ao username
    const passwordMatch = await compare(password, deliveryboy.password);

    if (!passwordMatch) {
      throw new Error("Password invalid!");
    }

    const token = sign({ username }, "c015d60b513ec13db8c013f8984a4051", { 
      subject: deliveryboy.id,
      expiresIn: "1d"     
    });
      
    return token;
  }
}
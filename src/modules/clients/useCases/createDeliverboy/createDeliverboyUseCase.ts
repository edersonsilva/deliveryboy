import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliverboy {
  username: string;
  password: string;
}

export class CreateDeliverboyUseCase {

  async execute({username, password}: ICreateDeliverboy) {
    // Validar se o usuario existe;
    const deliverboyExist = await prisma.deliverboy.findFirst({
      where: {
        username: {
          equals: username,
        }
      }
    })

    if(deliverboyExist) {
      throw new Error("User exists!")
    }

    // Criptografar a senha
    const saltRounds = 10;
    const hashPassword = await hash(password, saltRounds);

    // Salva o client
    const deliverboy = await prisma.deliverboy.create({
      data: {
        username,
        password: hashPassword
      }
    });

    return deliverboy;

    
  }
}
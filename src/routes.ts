import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/authenticateClientController";
import { AuthenticateDeliverboyController } from "./modules/account/authenticateDeliverboy/authenticateDeliverboyController";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { CreateDeliverboyController } from "./modules/clients/useCases/createDeliverboy/createDeliverboyController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

const createDeliverboyController = new CreateDeliverboyController();
const authenticateDeliverboyController =  new AuthenticateDeliverboyController();

routes.post("/client/", createClientController.handle);
routes.post("/client/authenticate", authenticateClientController.handle);

routes.post("/deliverboy/", createDeliverboyController.handle);
routes.post("/deliverboy/authenticate", authenticateDeliverboyController.handle);


export { routes };
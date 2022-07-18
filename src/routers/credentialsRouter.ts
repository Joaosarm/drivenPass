import { Router } from "express";
import { createCredential, getCredentials } from "../controllers/credentialsController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/validateToken.js";
import { credentialsSchema } from "../schemas/schemas.js";

const credentialRouter = Router();

credentialRouter.post("/credentials", validateSchema(credentialsSchema), validateToken, createCredential);
credentialRouter.get("/credentials", validateToken, getCredentials);

export default credentialRouter;
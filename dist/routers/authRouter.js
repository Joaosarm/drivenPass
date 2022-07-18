import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { signUpSchema } from "../schemas/schemas.js";
import { signIn, signUp } from "../controllers/authController.js";
var authRouter = Router();
authRouter.post("/signUp", validateSchema(signUpSchema), signUp);
authRouter.post("/signIn", validateSchema(signUpSchema), signIn);
export default authRouter;

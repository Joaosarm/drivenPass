import { Router } from "express";
import { createNote } from "../controllers/notesController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/validateToken.js";
import { notesSchema } from "../schemas/schemas.js";

const notesRouter = Router();

notesRouter.post("/notes", validateSchema(notesSchema), validateToken, createNote);
// notesRouter.get("/credentials", validateToken, getCredentials);
// notesRouter.get("/credentials/:id", validateToken, getOneCredential);
// notesRouter.delete("/credentials/:id", validateToken, deleteCredential);

export default notesRouter;
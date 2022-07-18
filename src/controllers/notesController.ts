import { Request, Response } from "express";
import * as notesServices from "../services/notesServices.js"

export async function createNote(req: Request, res: Response) {
  const data = req.body;
  let { userId } = res.locals;
  userId = parseInt(userId);
  await notesServices.createNote({ userId, ...data });
  res.sendStatus(201);
}
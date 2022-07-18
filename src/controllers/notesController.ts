import { Request, Response } from "express";
import * as notesServices from "../services/notesServices.js"

export async function createNote(req: Request, res: Response) {
  const data = req.body;
  let { userId } = res.locals;
  userId = parseInt(userId);
  await notesServices.createNote({ userId, ...data });
  res.sendStatus(201);
}

export async function getNotes(req: Request, res: Response) {
    let { userId } = res.locals;
    const credentials = await notesServices.getNotes(parseInt(userId));
    res.status(200).send(credentials);
  }
  
  export async function getOneNote(req: Request, res: Response) {
    let { id }= req.params;
    let { userId } = res.locals;
    const credential = await notesServices.getNote(parseInt(userId), parseInt(id));
    res.status(200).send(credential);
  }
  
  export async function deleteNote(req: Request, res: Response) {
    let { id }= req.params;
    let { userId } = res.locals;
    await notesServices.deleteNote(parseInt(userId), parseInt(id));
    res.sendStatus(200);
  }
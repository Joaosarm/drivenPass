import { Request, Response } from "express";
import * as credentialsServices from "../services/credentialsServices.js"

export async function createCredential(req: Request, res: Response) {
  const { id } = res.locals;
  const data = req.body;
  const userId = parseInt(id);
  await credentialsServices.createCredential({userId, ...data});
  res.sendStatus(201);
}
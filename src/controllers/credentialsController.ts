import { Request, Response } from "express";
import * as credentialsServices from "../services/credentialsServices.js"

export async function createCredential(req: Request, res: Response) {
  const data = req.body;
  let { userId } = res.locals;
  userId = parseInt(userId);
  await credentialsServices.createCredential({ userId, ...data });
  res.sendStatus(201);
}

export async function getCredentials(req: Request, res: Response) {
  let { userId } = res.locals;
  userId = parseInt(userId);
  const credentials = await credentialsServices.getCredentials(userId);
  res.status(200).send(credentials);
}

export async function getOneCredential(req: Request, res: Response) {
  let { id }= req.params;
  let { userId } = res.locals;
  userId = parseInt(userId);
  const credential = await credentialsServices.getCredential(userId, parseInt(id));
  res.status(200).send(credential);
}
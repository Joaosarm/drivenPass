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
  const credentials = await credentialsServices.getCredentials(parseInt(userId));
  res.status(200).send(credentials);
}

export async function getOneCredential(req: Request, res: Response) {
  let { id }= req.params;
  let { userId } = res.locals;
  const credential = await credentialsServices.getCredential(parseInt(userId), parseInt(id));
  res.status(200).send(credential);
}

export async function deleteCredential(req: Request, res: Response) {
  let { id }= req.params;
  let { userId } = res.locals;
  await credentialsServices.deleteCredential(parseInt(userId), parseInt(id));
  res.sendStatus(200);
}
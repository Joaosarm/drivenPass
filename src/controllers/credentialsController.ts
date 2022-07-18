import { Request, Response } from "express";
import * as credentialsServices from "../services/credentialsServices.js"

export async function createCredential(req: Request, res: Response) {
  const { id } = res.locals;
  const data = req.body;
  const userId = parseInt(id);
  await credentialsServices.createCredential({userId, ...data});
  res.sendStatus(201);
}

export async function getCredentials(req: Request, res: Response){
  const {id} = res.locals;
  const userId = parseInt(id);
  const credentials = await credentialsServices.getCredentials(userId);
  res.status(200).send(credentials);
}
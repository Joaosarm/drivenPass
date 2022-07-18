import { Request, Response } from "express";
import * as cardsServices from "../services/cardsServices.js"

export async function createCard(req: Request, res: Response) {
  const data = req.body;
  let { userId } = res.locals;
  userId = parseInt(userId);
  await cardsServices.createCard({ userId, ...data });
  res.sendStatus(201);
}

export async function getCards(req: Request, res: Response) {
    let { userId } = res.locals;
    const credentials = await cardsServices.getCards(parseInt(userId));
    res.status(200).send(credentials);
  }
  
  export async function getOneCard(req: Request, res: Response) {
    let { id }= req.params;
    let { userId } = res.locals;
    const credential = await cardsServices.getCard(parseInt(userId), parseInt(id));
    res.status(200).send(credential);
  }
  
  export async function deleteCard(req: Request, res: Response) {
    let { id }= req.params;
    let { userId } = res.locals;
    await cardsServices.deleteCard(parseInt(userId), parseInt(id));
    res.sendStatus(200);
  }
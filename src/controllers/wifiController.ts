import { Request, Response } from "express";
import * as wifiServices from "../services/wifiServices.js"

export async function createWifi(req: Request, res: Response) {
  const data = req.body;
  let { userId } = res.locals;
  userId = parseInt(userId);
  await wifiServices.createWifi({ userId, ...data });
  res.sendStatus(201);
}

export async function getWifis(req: Request, res: Response) {
    let { userId } = res.locals;
    const wifis = await wifiServices.getWifis(parseInt(userId));
    res.status(200).send(wifis);
  }
  
  export async function getOneWifi(req: Request, res: Response) {
    let { id }= req.params;
    let { userId } = res.locals;
    const wifi = await wifiServices.getWifi(parseInt(userId), parseInt(id));
    res.status(200).send(wifi);
  }
  
  export async function deleteWifi(req: Request, res: Response) {
    let { id }= req.params;
    let { userId } = res.locals;
    await wifiServices.deleteWifi(parseInt(userId), parseInt(id));
    res.sendStatus(200);
  }
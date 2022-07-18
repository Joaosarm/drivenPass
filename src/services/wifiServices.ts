import * as wifisRepository from "../repositories/wifisRepository.js"
import * as wifisUtils from "../utils/wifisUtils.js"
import { CreateWiFilData } from "../repositories/wifisRepository.js";
import Cryptr from "cryptr";

const cryptr = new Cryptr(process.env.KEY);

export async function createWifi(wifiData : CreateWiFilData){
    const {userId, title, password} = wifiData;
    await wifisUtils.checkTitle(userId, title);
    const encryptedPassword = cryptr.encrypt(password);
    await wifisRepository.insert({...wifiData, password: encryptedPassword});
}

export async function getWifis(userId : number){
    const wifis = await wifisRepository.getAllWifis(userId);
    wifis.map(wifi =>wifi.password = cryptr.decrypt(wifi.password));
    return wifis;
}

export async function getWifi(userId : number, id : number){
    const wifi = await wifisUtils.checkWifi(userId, id);
    wifi.password = cryptr.decrypt(wifi.password);
    return wifi;
}

export async function deleteWifi(userId : number, id : number){
    await wifisUtils.checkWifi(userId, id);
    await wifisRepository.deleteById(id);
}
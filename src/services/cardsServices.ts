import * as cardsRepository from "../repositories/cardsRepository.js"
import * as cardsUtils from "../utils/cardsUtils.js"
import { CreateCardlData } from "../repositories/cardsRepository.js";
import Cryptr from "cryptr";

const cryptr = new Cryptr(process.env.KEY);

export async function createCard(cardData : CreateCardlData){
    const {userId, title, password, CVV} = cardData;
    await cardsUtils.checkTitle(userId, title);
    const encryptedPassword = cryptr.encrypt(password);
    const encryptedCVV = cryptr.encrypt(CVV);
    await cardsRepository.insert({...cardData, password: encryptedPassword, CVV: encryptedCVV});
}

export async function getCards(userId : number){
    const credentials = await cardsRepository.getAllCredentials(userId);
    credentials.map(credential =>{
         credential.password = cryptr.decrypt(credential.password);
         credential.CVV = cryptr.decrypt(credential.CVV);
        });
    return credentials;
}

export async function getCard(userId : number, id : number){
    const credential = await cardsUtils.checkCredential(userId, id);
    credential.password = cryptr.decrypt(credential.password);
    credential.CVV = cryptr.decrypt(credential.CVV);
    return credential;
}

export async function deleteCard(userId : number, id : number){
    await cardsUtils.checkCredential(userId, id);
    await cardsRepository.deleteById(id);
}
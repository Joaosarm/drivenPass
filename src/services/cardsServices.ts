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
    const cards = await cardsRepository.getAllCards(userId);
    cards.map(card =>{
        card.password = cryptr.decrypt(card.password);
        card.CVV = cryptr.decrypt(card.CVV);
        });
    return cards;
}

export async function getCard(userId : number, id : number){
    const card = await cardsUtils.checkCard(userId, id);
    card.password = cryptr.decrypt(card.password);
    card.CVV = cryptr.decrypt(card.CVV);
    return card;
}

export async function deleteCard(userId : number, id : number){
    await cardsUtils.checkCard(userId, id);
    await cardsRepository.deleteById(id);
}
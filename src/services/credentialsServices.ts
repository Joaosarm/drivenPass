import * as credentialsRepository from "../repositories/credentialsRepository.js"
import * as credentialsUtils from "../utils/credentialsUtils.js"
import { CreateCredentialData } from "../repositories/credentialsRepository.js";
import Cryptr from "cryptr";

const cryptr = new Cryptr(process.env.KEY);

export async function createCredential(credentialData : CreateCredentialData){
    const {userId, title, password} = credentialData;
    await credentialsUtils.checkTitle(userId, title);
    const encryptedPassword = cryptr.encrypt(password);
    await credentialsRepository.insert({...credentialData, password: encryptedPassword});
}

export async function getCredentials(userId : number){
    const credentials = await credentialsRepository.getAllCredentials(userId);
    credentials.map(credential => credential.password = cryptr.decrypt(credential.password));
    return credentials;
}

export async function getCredential(userId : number, id : number){
    const credential = await credentialsUtils.checkCredential(userId, id);
    credential.password = cryptr.decrypt(credential.password);
    return credential;
}

export async function deleteCredential(userId : number, id : number){
    await credentialsUtils.checkCredential(userId, id);
    await credentialsRepository.deleteById(id);
}
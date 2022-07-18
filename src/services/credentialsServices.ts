import * as credentialsRepository from "../repositories/credentialsRepository.js"
import * as credentialsUtils from "../utils/credentialsUtils.js"
import { CreateCredentialData } from "../repositories/credentialsRepository.js";
import bcrypt from "bcrypt";

export async function createCredential(credentialData : CreateCredentialData){
    const {userId, title, password} = credentialData;
    await credentialsUtils.checkTitle(userId, title);
    const encryptedPassword = bcrypt.hashSync(password, 10);
    await credentialsRepository.insert({...credentialData, password: encryptedPassword});

}
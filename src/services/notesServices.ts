import * as notesUtils from "../utils/notesUtils.js";
import * as notesRepository from "../repositories/notesRepository.js";
import { CreateNoteData } from "../repositories/notesRepository";

export async function createNote(noteData : CreateNoteData){
    const {userId, title} = noteData;
    await notesUtils.checkTitle(userId, title);
    await notesRepository.insert(noteData);
}

export async function getNotes(userId : number){
    const credentials = await notesRepository.getAllCredentials(userId);
    return credentials;
}

export async function getNote(userId : number, id : number){
    const credential = await notesUtils.checkNote(userId, id);
    return credential;
}

export async function deleteNote(userId : number, id : number){
    await notesUtils.checkNote(userId, id);
    await notesRepository.deleteById(id);
}
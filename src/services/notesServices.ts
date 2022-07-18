import * as notesUtils from "../utils/notesUtils.js";
import * as notesRepository from "../repositories/notesRepository.js";
import { CreateNoteData } from "../repositories/notesRepository";

export async function createNote(noteData : CreateNoteData){
    const {userId, title} = noteData;
    await notesUtils.checkTitle(userId, title);
    await notesRepository.insert(noteData);
}
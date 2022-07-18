import * as notesRepository from "../repositories/notesRepository.js"

export async function checkTitle(userId: number, title: string) {
  const existingTitles = await notesRepository.findTitlesById(userId);
  if (existingTitles.find(existingTitle => existingTitle.title === title)) {
    throw {
      type: "Invalid requisition",
      message: "Title already in use by this user"
    }
  }
}

export async function checkNote(userId: number, id : number) {
    let note = await notesRepository.findById(id);
    if (!note) {
      throw {
        type: "Invalid requisition",
        message: "Note non-existing"
      }
    }
    if (note.userId!==userId) {
      throw {
        type: "Invalid requisition",
        message: "Not the note owner"
      }
    }
    return note;
  }
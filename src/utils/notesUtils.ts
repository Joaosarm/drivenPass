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
import * as credentialsRepository from "../repositories/credentialsRepository.js"

export async function checkTitle(userId: number, title: string) {
  const existingTitles = await credentialsRepository.findTitlesById(userId);
  if (existingTitles.find(existingTitle => existingTitle.title === title)) {
    throw {
      type: "Invalid requisition",
      message: "Title already in use by this user"
    }
  }
}
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

export async function checkCredential(userId: number, id : number) {
  let credential = await credentialsRepository.findById(id);
  if (!credential) {
    throw {
      type: "Invalid requisition",
      message: "Credential non-existing"
    }
  }
  if (credential.userId!==userId) {
    throw {
      type: "Invalid requisition",
      message: "Not the credential owner"
    }
  }
  return credential;
}
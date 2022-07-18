import * as wifisRepository from "../repositories/wifisRepository.js"

export async function checkTitle(userId: number, title: string) {
  const existingTitles = await wifisRepository.findTitlesById(userId);
  if (existingTitles.find(existingTitle => existingTitle.title === title)) {
    throw {
      type: "Invalid requisition",
      message: "Title already in use by this user"
    }
  }
}

export async function checkWifi(userId: number, id : number) {
  let credential = await wifisRepository.findById(id);
  if (!credential) {
    throw {
      type: "Invalid requisition",
      message: "Wi-fi non-existing"
    }
  }
  if (credential.userId!==userId) {
    throw {
      type: "Invalid requisition",
      message: "Not the wi-fi owner"
    }
  }
  return credential;
}
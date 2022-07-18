import { notes } from "@prisma/client";
import { prisma } from "../config/database.js";

export type CreateNoteData = Omit<notes, "id">;


export async function insert(noteData: CreateNoteData) {
    await prisma.notes.create({ data: noteData });
}

export async function findTitlesById(userId: number) {
    return await prisma.notes.findMany({
        where: {
            userId
        },
        select: {
            title: true,
        },
    });
}

export async function getAllNotes(userId: number) {
    return await prisma.notes.findMany({
        where: {
            userId
        }
    });
}

export async function findById(id : number){
    return await prisma.notes.findUnique({
        where: {
            id
        }
    });
}

export async function deleteById(id : number){
    return await prisma.notes.delete({
        where: {
            id
        }
    });
}
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
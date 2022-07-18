import { cards } from "@prisma/client";
import { prisma } from "../config/database.js";

export type CreateCardlData = Omit<cards, "id">;


export async function insert(cardData: CreateCardlData) {
    await prisma.cards.create({ data: cardData });
}

export async function findTitlesById(userId: number) {
    return await prisma.cards.findMany({
        where: {
            userId
        },
        select: {
            title: true,
        },
    });
}

export async function getAllCredentials(userId: number) {
    return await prisma.cards.findMany({
        where: {
            userId
        }
    });
}

export async function findById(id : number){
    return await prisma.cards.findUnique({
        where: {
            id
        }
    });
}

export async function deleteById(id : number){
    return await prisma.cards.delete({
        where: {
            id
        }
    });
}

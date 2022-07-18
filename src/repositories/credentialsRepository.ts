import { Credentials } from "@prisma/client";
import { prisma } from "../config/database.js";

export type CreateCredentialData = Omit<Credentials, "id">;


export async function insert(credentialData: CreateCredentialData) {
    await prisma.credentials.create({ data: credentialData });
}

export async function findTitlesById(userId: number) {
    return await prisma.credentials.findMany({
        where: {
            userId
        },
        select: {
            title: true,
        },
    });
}

export async function getAllCredentials(userId: number) {
    return await prisma.credentials.findMany({
        where: {
            userId
        }
    });
}

export async function findById(id : number){
    return await prisma.credentials.findUnique({
        where: {
            id
        }
    });
}

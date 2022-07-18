import { wifis } from "@prisma/client";
import { prisma } from "../config/database.js";

export type CreateWiFilData = Omit<wifis, "id">;


export async function insert(wifiData: CreateWiFilData) {
    await prisma.wifis.create({ data: wifiData });
}

export async function findTitlesById(userId: number) {
    return await prisma.wifis.findMany({
        where: {
            userId
        },
        select: {
            title: true,
        },
    });
}

export async function getAllWifis(userId: number) {
    return await prisma.wifis.findMany({
        where: {
            userId
        }
    });
}

export async function findById(id : number){
    return await prisma.wifis.findUnique({
        where: {
            id
        }
    });
}

export async function deleteById(id : number){
    return await prisma.wifis.delete({
        where: {
            id
        }
    });
}

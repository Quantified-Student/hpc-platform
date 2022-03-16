// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, User } from '@prisma/client'
import DatabaseClient from "../../../services/DatabaseClient";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const userById: User | null = await DatabaseClient.user.findUnique({
        where: {
            id: parseInt(<string>req.query.userId)
        }
    })

    if (userById === null){
        res.status(404).json({})
    } else {
        res.status(200).json(userById)
    }


}

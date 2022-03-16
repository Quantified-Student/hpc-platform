// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const prisma = new PrismaClient()

    async function main() {
        return await prisma.user.findMany()
    }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const prisma = new PrismaClient()

  async function main() {
    return await prisma.user.create({
        data: {
            name: 'Neal',
            email: 'awdjhwaljkdh@nealgeilen.nl'
        }
    })
  }

  main()
      .then((response) => {
        res.status(200).json(response)
      })
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await prisma.$disconnect()
      })
}

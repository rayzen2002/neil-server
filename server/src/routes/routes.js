import { prisma } from '../lib/prisma.js'

export async function Routes(app) {
  app.get('/players', async (request) => {
    const Players = await prisma.player.findMany()

    return Players
  })
}

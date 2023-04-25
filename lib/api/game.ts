import prisma from "../prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export async function getGames(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse<any | (any | null)>> {
  try {
    const games = await prisma.game.findMany();
    return res.status(200).json({ games });
  } catch (error) {
    console.error(error);
    return res.status(500).end(error);
  }
}

export async function getGameById(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse<any | (any | null)>> {
  try {
    const game = await prisma.game.findUnique({
      where: { id: req.query.id as string },
    });

    if (!game) {
      return res.status(401).json(`No game found with id: ${req.query.id} `);
    }

    return res.status(200).json({ game });
  } catch (error) {
    console.error(error);
    return res.status(500).end(error);
  }
}

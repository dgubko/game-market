import prisma from "../prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse<any | (any | null)>> {
  try {
    const users = await prisma.user.findMany();
    return res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    return res.status(500).end(error);
  }
}

export async function getUserByUsername(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse<any | (any | null)>> {
  try {
    const user = await prisma.user.findUnique({
      where: { username: req.query.username as string },
    });

    if (!user) {
      return res
        .status(401)
        .json(`No user found with username: ${req.query.username} `);
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).end(error);
  }
}

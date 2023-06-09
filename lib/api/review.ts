import prisma from "../prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export async function getReviews(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse<any | (any | null)>> {
  try {
    const reviews = await prisma.review.findMany();
    return res.status(200).json({ reviews });
  } catch (error) {
    console.error(error);
    return res.status(500).end(error);
  }
}

export async function postReview(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse<any | (any | null)>> {
  try {
    if (
      req.body.title &&
      req.body.stars &&
      req.body.comment &&
      req.body.userId &&
      req.body.gameId
    ) {
      const review = await prisma.review.create({ data: req.body });
      return res.status(200).json({ review });
    }

    return res.status(400).json({
      request: "POST: add new review",
      message:
        "Wrong review data has been send: title, string, comment, userId and gameId are required values and can be empty",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).end(error);
  }
}

import type { NextApiRequest, NextApiResponse } from "next";
import { getReviews, postReview } from "@/lib/api/review";

enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export default async function review(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case HttpMethod.GET:
      return getReviews(req, res);
    case HttpMethod.POST:
      return postReview(req, res);
    // case HttpMethod.DELETE:
    //   return deletePost(req, res);
    // case HttpMethod.PUT:
    //   return updatePost(req, res);
    default:
      res.setHeader("Allow", [
        HttpMethod.GET,
        HttpMethod.POST,
        HttpMethod.DELETE,
        HttpMethod.PUT,
      ]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

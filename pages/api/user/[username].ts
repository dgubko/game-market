import type { NextApiRequest, NextApiResponse } from "next";
import { getUserByUsername } from "@/lib/api/user";

enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case HttpMethod.GET:
      return getUserByUsername(req, res);
    // case HttpMethod.POST:
    //   return createPost(req, res);
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

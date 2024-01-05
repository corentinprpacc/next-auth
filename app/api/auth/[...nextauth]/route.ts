import { handlers } from "@/auth"
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

export const GET = (req: NextRequest) => {
  return handlers.GET(req);
}

export const POST = (req: NextRequest) => {
    return handlers.POST(req)
}

// export const runtime = "edge" // optional
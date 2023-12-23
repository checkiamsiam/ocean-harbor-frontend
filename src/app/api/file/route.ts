// @ts-ignore
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return NextResponse.json({ name: "File uploaded" });
};

export { handler as POST };

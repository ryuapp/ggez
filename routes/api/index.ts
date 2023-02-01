// deno-lint-ignore-file
import { HandlerContext, PageProps } from "$fresh/server.ts";
import ggezList from "./ggez.json" assert { type: "json" };

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const randomIndex = Math.floor(Math.random() * Object.keys(ggezList.list).length);
  const body = JSON.stringify(ggezList.list[randomIndex]);

  return new Response(body,{
    headers:{"Content-Type": "application/json"}
  });
};
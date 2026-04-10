import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

export const dynamic = "force-dynamic";

const ghOptions =
  process.env.KEYSTATIC_GITHUB_CLIENT_ID
    ? {
        clientId: process.env.KEYSTATIC_GITHUB_CLIENT_ID,
        clientSecret: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET!,
        secret: process.env.KEYSTATIC_SECRET!,
      }
    : {};

export const { POST, GET } = makeRouteHandler({
  config,
  ...ghOptions,
});

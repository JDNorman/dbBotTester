import { config } from "./config";
import { client } from "./handlers";
import { onInteraction, onReady } from "./events";

const { BOT_TOKEN } = config;

async function main() {
  client.on("ready", async () => {
    await onReady(client);
  });
}

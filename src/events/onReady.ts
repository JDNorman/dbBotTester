import { ActivityType, Client, REST, Routes } from "discord.js";
import { schedule } from "node-cron";
import { commandHash, commandList, presenceCmds } from "../commands";
import { config } from "../config";

const BOT_TOKEN = config.BOT_TOKEN;
const PERSISTENT_MESSAGE_INTERVAL = config.PERSISTENT_MESSAGE_INTERVAL;
const STATUS_UPDATE_INTERVAL = config.STATUS_UPDATE_INTERVAL;
const VERSION = config.VERSION;

const onReady = async (client: Client) => {
  if (!client.user) throw Error("Client not initialized!");
  const clientId = client.user.id;
  const serverCount = (await client.guilds.fetch()).size;

  const rest = new REST().setToken(BOT_TOKEN);

  console.log(
    `[v${VERSION}] Serving ${serverCount} servers as ${client.user?.tag}`,
    {
      type: "startup",
    }
  );

  // two non-constant value for timing functions
  let start = Date.now();
  let time = "";

  // register commands as global discord slash commands
  const commandData = commandList.map((command) => command.data.toJSON());

  await rest.put(Routes.applicationCommands(clientId), {
    body: commandData,
  });

  console.log(`Commands loaded: ${Object.keys(commandHash).join(", ")}`, {
    type: "startup",
  });

  time = `${Date.now() - start}ms`;
  console.log(`Loaded ${commandData.length} commands in ${time}`, {
    type: "startup",
  });

  // cron schedule to update presence every 3 seconds
  schedule(STATUS_UPDATE_INTERVAL, () => {
    if (client.user) {
      if (client.user.presence.activities[0]) {
        const prev = client.user.presence.activities[0].name;
        client.user.setActivity(presenceCmds.shift() as string, {
          type: ActivityType.Listening,
        });
        presenceCmds.push(prev);
      } else {
        client.user.setActivity(presenceCmds.shift() as string, {
          type: ActivityType.Listening,
        });
      }
    }
  });
};

export { onReady };

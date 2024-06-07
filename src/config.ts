import "dotenv/config";
import { version } from "../package.json";

const configObj: Record<string, string | number | undefined> = {
  // Bot Config
  BOT_TOKEN: process.env.BOT_TOKEN,
  BOT_OWNER: process.env.BOT_OWNER || "1013147665325883463",

  // Cron job intervals
  PERSISTENT_MESSAGE_INTERVAL: "*/30 * * * *", // every 30 minutes
  API_UPDATE_INTERVAL: "*/30 * * * * *", // every 20 seconds
  STATUS_UPDATE_INTERVAL: "*/3 * * * * *", // every 3 seconds

  // Bot Commands
  EMBED_COLOR: process.env.EMBED_COLOR || "Green",
  FooterMessage:
    "Bot suggestions welcome in Discord!\n" +
    `v${version} | Made by Malamania (@animateobject_)`,
  GITHUB_LINK: "https://github.com/JDNorman/dbBotTester/",

  // Project Info
  VERSION: version,
  CONTACT: "@animateobject_",
};

const config: Record<string, string> = {};
// assert all env vars as non-null and populate config with only strings
Object.keys(configObj).forEach((key) => {
  const value = configObj[key];
  if (value === undefined)
    throw new Error(`${key} environment variable required!`);

  config[key] = value as string;
});

export { config };

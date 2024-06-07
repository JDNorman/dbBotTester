import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import { config } from "../../config";

const { GITHUB_LINK } = config;

export const githubButton = new ButtonBuilder()
  .setLabel("GitHub")
  .setStyle(ButtonStyle.Link)
  .setURL(GITHUB_LINK);

export const supportRow = new ActionRowBuilder<ButtonBuilder>().addComponents([
  githubButton,
]);

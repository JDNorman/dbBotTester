import {
  ColorResolvable,
  CommandInteraction,
  EmbedBuilder,
  MessageComponentInteraction,
  ModalSubmitInteraction,
} from "discord.js";
import { client } from "../client";
import { EMBED_COLOR, FOOTER_MESSAGE } from "./exports";
import { supportRow } from "./compontents";

export function commandErrorEmbed(
  interaction: CommandInteraction | ModalSubmitInteraction
) {
  return {
    embeds: [
      new EmbedBuilder()
        .setAuthor({
          name: client.user?.tag || "",
          iconURL: client.user?.avatarURL() || undefined,
        })
        .setTitle("dbBotTester Encountered an Error!")
        .setDescription(
          `There was an issue trying to execute \`/${
            interaction.isCommand()
              ? interaction.commandName
              : interaction.customId
          }\`! ` +
            "The issue has been logged and will be looked into. Feel free to try again shortly. " +
            "If the problem persists, please reach out to @animateobject_ on Discord for help!"
        )
        .setFooter({ text: FOOTER_MESSAGE })
        .setColor(EMBED_COLOR as ColorResolvable)
        .setTimestamp(),
    ],
    compontents: [supportRow],
  };
}

export function componentErrorEmbed(interaction: MessageComponentInteraction) {
  return {
    embeds: [
      new EmbedBuilder()
        .setAuthor({
          name: client.user?.tag || "",
          iconURL: client.user?.avatarURL() || undefined,
        })
        .setTitle("dbBotTester Encountered an Error!")
        .setDescription(
          `There was an issue trying to reach component type \`${interaction.customId}\`! ` +
            "The issue has been logged and will be looked into. Feel free to try again shortly. " +
            "If the problem persists, please reach out to @animateobject_ on Discord for help!"
        )
        .setFooter({ text: FOOTER_MESSAGE })
        .setColor(EMBED_COLOR as ColorResolvable)
        .setTimestamp(),
    ],
    component: [supportRow],
  };
}

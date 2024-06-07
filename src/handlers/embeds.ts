import {
  ActionRowBuilder,
  ButtonBuilder,
  ColorResolvable,
  CommandInteraction,
  EmbedBuilder,
} from "discord.js";
import { config } from "../config";

const { SUBSCRIBE_FOOTER, FOOTER_MESSAGE, EMBED_COLOR } = config;

export function ownerCommandEmbed(interaction: CommandInteraction) {
  return {
    embeds: [
      new EmbedBuilder()
        .setAuthor({
          name: interaction.user.tag,
          iconURL: interaction.user.avatarURL() || undefined,
        })
        .setTitle("Permissions Denied")
        .setDescription("This command is only available to Owners!")
        .setFooter({ text: FOOTER_MESSAGE })
        .setColor(EMBED_COLOR as ColorResolvable)
        .setTimestamp(),
    ],
  };
}

import {
  TextChannel,
  PublicThreadChannel,
  ChannelType,
  DiscordAPIError,
  NewsChannel,
} from "discord.js";
import { client } from "../client";

export async function validateChannel(
  id: string
): Promise<TextChannel | PublicThreadChannel | NewsChannel | void> {
  try {
    const channel = await client.channels.fetch(id);
    if (!channel) return;
    if (
      channel.type === ChannelType.GuildText ||
      channel.type === ChannelType.PublicThread ||
      channel.type === ChannelType.GuildAnnouncement ||
      channel.type === ChannelType.AnnouncementThread
    )
      return channel as TextChannel | PublicThreadChannel | NewsChannel;
    return;
  } catch (err) {
    const discordErr = err as DiscordAPIError;
    console.log(`${discordErr.message}`, {
      channel_id: id,
      type: "error",
    });
    return;
  }
}

export async function validateChannelArr(
  ids: string[]
): Promise<(TextChannel | PublicThreadChannel | NewsChannel)[]> {
  const channels: (TextChannel | PublicThreadChannel | NewsChannel)[] = [];
  for (const id of ids) {
    const channel = await validateChannel(id);
    if (channel) channels.push(channel);
  }
  return channels;
}

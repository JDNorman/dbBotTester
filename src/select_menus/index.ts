import {
  StringSelectMenuInteraction,
  ChannelSelectMenuInteraction,
  UserSelectMenuInteraction,
  MentionableSelectMenuInteraction,
  RoleSelectMenuInteraction,
  User,
} from "discord.js";

const stringMenuHash: Record<
  string,
  (interaction: StringSelectMenuInteraction) => Promise<void>
> = {
  // custom id
};

const channelMenuHash: Record<
  string,
  (interaction: ChannelSelectMenuInteraction) => Promise<void>
> = {
  // channel id
};

const userMenuHash: Record<
  string,
  (interaction: UserSelectMenuInteraction) => Promise<void>
> = {
  // channel id
};

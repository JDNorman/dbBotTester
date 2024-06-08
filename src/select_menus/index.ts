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
  // custom id
};

const mentionMenuHash: Record<
  string,
  (interaction: MentionableSelectMenuInteraction) => Promise<void>
> = {
  // custom id
};

const roleMenuHash: Record<
  string,
  (interaction: RoleSelectMenuInteraction) => Promise<void>
> = {
  // custom id
};

export {
  stringMenuHash,
  channelMenuHash,
  userMenuHash,
  mentionMenuHash,
  roleMenuHash,
};

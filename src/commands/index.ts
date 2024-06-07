import {
  ButtonBuilder,
  CommandInteraction,
  ModalSubmitInteraction,
  StringSelectMenuBuilder,
} from "discord.js";
import { Command } from "../interfaces";

const commandList: Command[] = [];
const notEphemeral: string[] = [];
const ephemeralCmds = commandList
  .map((x) => x.data.name)
  .filter((x) => !notEphemeral.includes(x));

const commandHash: Record<
  string,
  (interaction: CommandInteraction) => Promise<void>
> = {};
for (const command of commandList) commandHash[command.data.name] = command.run;

const modalHash: Record<
  string,
  (interaction: ModalSubmitInteraction) => Promise<void>
> = {};

// elevated commands -- not for base users
const ownerCmds: string[] = [];

// cycle through non-admin commands as status
const presenceCmds = Object.keys(commandHash)
  .filter((x) => ![...ownerCmds].includes(x))
  .map((x) => `/${x}`);

// commands to offer spreadsheet autocomplete for
const sheetAutoCmds = [];

// commands do not defer/suggestion etc. instead provide a modal for further input
const modalCmds: string[] = [];

export {
  commandList,
  commandHash,
  modalHash,
  ownerCmds,
  presenceCmds,
  modalCmds,
  ephemeralCmds,
  sheetAutoCmds,
};

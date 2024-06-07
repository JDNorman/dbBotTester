import { EmbedBuilder, Interaction } from "discord.js";
import {
  sheetAutoCmds,
  commandHash,
  ephemeralCmds,
  ownerCmds,
} from '../commands'
import {
  checkPerms,
  commandErrorEmbed,
  componentErrorEmbed,
  ownerCommandEmbed,
} from '../handlers/embeds';
import {go as search} from 'fuzzysort';
import {buttonHash} from '../buttons';
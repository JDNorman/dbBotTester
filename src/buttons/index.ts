import { ButtonInteraction } from "discord.js";

const buttonHash: Record<
  string,
  (interaction: ButtonInteraction) => Promise<void>
> = {
  //button names go here (and import them up above)
};

export { buttonHash };

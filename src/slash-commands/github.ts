import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageButton } from 'discord.js';
import { MessageActionRow } from 'discord.js';
import { SlashCommand } from '../types';

const GITHUB_URL = 'https://github.com/myles-ux';

export const GithubCommand: SlashCommand = {
  command: new SlashCommandBuilder().setName('github').setDescription('Github link'),

  async run(interaction) {
    const linkButton = new MessageActionRow().addComponents(
      new MessageButton().setURL(GITHUB_URL).setStyle('LINK').setLabel('Github')
    );

    await interaction.reply({ components: [linkButton] });
  },
};

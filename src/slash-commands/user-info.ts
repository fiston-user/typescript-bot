import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';
import { SlashCommand } from '../types';

export const UserInfoCommand: SlashCommand = {
  command: new SlashCommandBuilder()
    .addUserOption((option) => option.setName('user').setDescription("The user's username").setRequired(true))
    .setName('user-info')
    .setDescription('Get the user info'),

  async run(interaction) {
    const user = interaction.options.getUser('user', true);
    const avatar = user.displayAvatarURL();
    const userEmbed = new MessageEmbed()
      .setColor('YELLOW')
      .setTitle(user.username)
      .setThumbnail(avatar)
      .addField('Created At', user.createdAt.toDateString(), true);

    userEmbed.setFooter({ text: `ID: ${user.id}` });

    await interaction.reply({ embeds: [userEmbed] });
  },
};

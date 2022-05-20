import { SlashCommandBuilder } from '@discordjs/builders';
import { SlashCommand } from '../types';

export const AddCommand: SlashCommand = {
  command: new SlashCommandBuilder()
    .addNumberOption((option) => option.setName('number1').setDescription('The first number').setRequired(true))
    .addNumberOption((option) => option.setName('number2').setDescription('The second number').setRequired(true))
    .setName('add')
    .setDescription('Adds two numbers together'),
  async run(interaction) {
    const { options } = interaction;

    const number1 = options.getNumber('number1', true);
    const number2 = options.getNumber('number2', true);

    const sum = number1 + number2;
    await interaction.reply({ content: `The sum of ${number1} and ${number2} is ${sum}` });
  },
};

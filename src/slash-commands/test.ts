import { SlashCommandBuilder, memberNicknameMention } from "@discordjs/builders";
import { SlashCommand } from "../types";

export const HelloCommand: SlashCommand = {
  command: new SlashCommandBuilder()
   .setName('hello')
   .setDescription('Say hello to the bot.'),
 async run(interaction){
    await interaction.reply({ content: `${memberNicknameMention(interaction.user.id)} says hello!` });
 }  
}
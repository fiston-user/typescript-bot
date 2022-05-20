import { REST } from '@discordjs/rest';
import { APPLICATION_ID, GUILD_ID, TOKEN } from './config';
import { SlashCommands } from './slash-commands';
import { Routes } from 'discord-api-types/v9';

const registerGuildCommands = async () => {
  try {
    const commands = SlashCommands.map(({ command }) => command.toJSON());
    const rest = new REST({ version: '9' }).setToken(TOKEN);
    console.log('Registering guild commands...');
    await rest.put(Routes.applicationGuildCommands(APPLICATION_ID, GUILD_ID), { body: commands });
    console.log('Guild commands registered!');
  } catch (err) {
    console.log('Error registering guild commands:', err);
  }
};

registerGuildCommands();

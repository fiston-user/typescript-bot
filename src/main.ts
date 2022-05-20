import { Client, Intents } from 'discord.js';
import { TOKEN } from './config';
import { onInteractionCreate, onMessageCreate, onReady } from './listeners';

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES],
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
})

onReady(client);
onMessageCreate(client);
onInteractionCreate(client);

client.login(TOKEN)
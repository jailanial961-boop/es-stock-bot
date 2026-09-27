const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
  ] 
});

const TOKEN = process.env.DISCORD_TOKEN;
const STOCK_CHANNEL = process.env.STOCK_CHANNEL_ID;

client.on('ready', () => {
  console.log(`Bot ON: ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.channel.id !== STOCK_CHANNEL) return;
  if (message.author.bot) return;
  
  // Disini nanti bot bakal forward ke WA Channel kamu
  // https://whatsapp.com/channel/0029Vb9XQvF5Ui2a6MzOjP0Q
  console.log("STOCK BARU DAPET: " + message.content);
});

client.login(TOKEN);

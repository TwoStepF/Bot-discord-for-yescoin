const { Client, Events, GatewayIntentBits } = require('discord.js');
const { ChatCommands } = require('./enum/appConst');
const { startPlayYescoin, stopPlayYesCoin, inputToken } = require('./service/yescoin');
const { helpReply } = require('./service/replyTemplate');
require('dotenv').config();

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.MessageCreate, async interaction => {
	if (interaction.author.bot) return;
	let content = interaction.content.trim().split(" ");
	let frefix = content[0];
	switch (frefix) {
		case ChatCommands.START_PLAY:
			if (!coinCount || !time) {
				const embed = helpReply();
				await interaction.reply({ embeds: [embed] });
			}
			const coinCount = Number(content[1]);
			const time = Number(content[2]);
			startPlayYescoin(coinCount, time, interaction);
			break;
		case ChatCommands.STOP_PLAY:
			stopPlayYesCoin(interaction);
			break;
		case ChatCommands.INPUT_TOKEN:
			const token = content[1];
			inputToken(token, interaction)
			break;
		default:
			const embed = helpReply();
			await interaction.reply({ embeds: [embed] });
	}
});

client.login(process.env.TOKEN);
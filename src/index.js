const { Client, Events, GatewayIntentBits, EmbedBuilder } = require('discord.js');
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
	if(interaction.author.bot) return;
	test(interaction);
});

const test = async (interaction) => {
	const embed = new EmbedBuilder()
					.setTitle('Yescoin log info')
					.setColor(0x18e1ee)
					.addFields(
						{ name: '', value: 'Some value here', inline: true },
						{ name: 'Inline field title', value: 'Some value here', inline: true },
						{ name: 'Inline field title', value: 'Some value here', inline: true },
						{ name: '\u200B', value: '\u200B' },
					).setTimestamp(Date.now())
		await interaction.reply({ embeds: [embed] });
}

client.login(process.env.TOKEN);
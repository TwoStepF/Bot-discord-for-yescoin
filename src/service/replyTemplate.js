import { EmbedBuilder } from "discord.js";

export const helpReply = () => {
    return new EmbedBuilder()
        .setColor(0x0000ff)
        .addFields(
            { name: 'Start play yescoin', value: "!StartPlay your_coin_count your_time" },
            { name: 'Stop play yescoin', value: "!StopPlay" },
            { name: 'Input token', value: "!InputToken your_token_here" }
        )
        .setTimestamp(Date.now());
}

export const yescoinInfor = (collectCoinRes, getAccountInforRes, getGemeInfoRes) => {
    return new EmbedBuilder()
        .setTitle('Yescoin log info')
        .setColor(0x00ff00)
        .addFields(
            { name: 'Collection coin status', value: `Status: ${collectCoinRes.data.collectStatus} - Amount: ${collectCoinRes.data.collectAmount}` },
            { name: 'Game Info', value: `Coin avaible: ${getGemeInfoRes.data.coinPoolLeftCount} - Total coin: ${getAccountInforRes.data.currentAmount}` },
            { name: '\u200B', value: '\u200B' },
        )
        .setTimestamp(Date.now());
}

export const yescoinError = (e) => {
    return new EmbedBuilder()
        .setTitle('Yescoin log info')
        .setColor(0xff0000)
        .setDescription(`Error: ${e}`);
}
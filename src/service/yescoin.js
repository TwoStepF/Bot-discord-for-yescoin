import { collectCoin, getAccountInfor, getGemeInfo } from "../api/yescoinApi";
import { getToken, setToken } from "../storage/tokenStorage";
import { yescoinError, yescoinInfor } from "./replyTemplate";

let id = null;

const setupToken = () => {
    let token = getToken();
    if (token) {
        return {
            headers: {
                'Token': token
            }
        }
    }
    return null;
}

export const startPlayYescoin = async (coinCount, time, interaction) => {
    await interaction.reply(`Started processing ...`);

    id = setInterval(async () => {
        try {
            const config = setupToken()
            if (config) {
                await interaction.reply(`You need input token to start!`);
                clearInterval(id);
                return;
            }
            let [collectCoinRes, getAccountInforRes, getGemeInfoRes] = await Promise.all([
                collectCoin({ coinCount, config }),
                getAccountInfor({ config }),
                getGemeInfo({ config }),
            ]);
            const embed = yescoinInfor(collectCoinRes, getAccountInforRes, getGemeInfoRes);

            await interaction.reply({ embeds: [embed] });
        } catch (e) {
            const embed = yescoinError(e);

            await interaction.reply({ embeds: [embed] });
        }
    }, time)
}

export const stopPlayYesCoin = async (interaction) => {
    clearInterval(id);
    await interaction.reply('Stoped play yes coin');
}

export const inputToken = async (token, interaction) => {
    setToken(token);
    await interaction.reply('Input token success!');
}

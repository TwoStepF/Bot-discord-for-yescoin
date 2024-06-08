
const getAccountInfor = async ({ config = {} }) => {
    return await yescoinAxios(`/account/getAccountInfo`, {
        method: 'GET',
        ...config
    });
}

const collectCoin = async ({ coinCount, config = {} }) => {
    return await yescoinAxios('/game/collectCoin', {
        method: 'POST',
        data: coinCount,
        ...config
    })
}

const getGemeInfo = async ({ config = {} }) => {
    return await yescoinAxios('/game/getGameInfo', {
        method: 'GET',
        ...config
    })
}

module.exports = { getGemeInfo, collectCoin, getAccountInfor };
const {events, chat} = require('resourcemod')
const defaultConfig = {prefix: "[rMod]", connect: true, disconnect: true}

const useWelcomeMessages = (parameters = defaultConfig) => {
    const config = {
        ...defaultConfig,
        ...parameters
    }
    if (config.connect) {
        events.onClientPutInServer((event) => {
            chat.sayToEveryone(`${config.prefix} ${event.getPlayer().getName()} connected.`)
        })
    }

    if (config.disconnect) {
        events.onClientDisconnected((event) => {
            chat.sayToEveryone(`${config.prefix} ${event.getPlayer().getName()} disconnected.`)
        })
    }
}

module.exports = {
    useWelcomeMessages
}
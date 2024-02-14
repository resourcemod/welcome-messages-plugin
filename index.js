const {events, chat} = require('resourcemod')
const defaultConfig = {prefix: "[rMod]", connect: true, disconnect: true}

const useWelcomeMessages = (parameters = defaultConfig) => {
    const config = {
        ...defaultConfig,
        ...parameters
    }
    if (config.connect) {
        events.onClientPutInServer((event) => {
            chat.sayToEveryone(`${config.prefix} ${event.player.name} connected.`)
        })
    }

    if (config.disconnect) {
        events.onClientDisconnected((event) => {
            chat.sayToEveryone(`${config.prefix} ${event.player.name} disconnected.`)
        })
    }
}

module.exports = {
    useWelcomeMessages
}

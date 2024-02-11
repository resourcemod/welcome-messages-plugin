
# Welcome messages

The plugin shows messages in chat when a player connects and disconnects from the server.

### Installation:
1. `npm i welcome-messages-plugin`.
2. Connect the plugin in the `resourcemod.config.js` file

```
const {useWelcomeMessages} = require('welcome-messages-plugin')
...
plugins: [useWelcomeMessages(options)],
```

### Available options

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `connect`      | `bool` | Show a message when a player connects. |
| `disconnect`      | `bool` | Show a message when a player is disconnected. |
| `prefix`      | `string` | Prefix in chat before the message. |

### An example of how to use the options:

```
const {useWelcomeMessages} = require('welcome-messages-plugin')
...
plugins: [
    useWelcomeMessages({
        prefix: "Server >",
        connect: true,
        disconnect: true
    }),
],
```
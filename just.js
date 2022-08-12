const {Client , GatewayIntentBits}= require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds]});
const config = require("/config.js");

client.on("ready",() => {
    console.log(" i am still alive");
});

client.login(config.token);
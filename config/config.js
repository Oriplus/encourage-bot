require('dotenv').config();

const config = {
    token: process.env['TOKEN'],
    clientId: process.env['CLIENT_ID'],
    guildId: process.env['GUILD_ID'],
}

module.exports = {config};
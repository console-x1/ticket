const { SlashCommandBuilder, PermissionsBitField, EmbedBuilder, ActivityType } = require("discord.js");

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        console.log(`[READY]  ${client.user.tag} est prêt ||| ${client.guilds.cache.size.toLocaleString('fr-FR')} serveurs | ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0).toLocaleString('fr-FR')} utilisateurs\n`);
        setInterval(() => {
            let random = Math.floor(Math.random() * status.length);
            client.user.setActivity(status[random]);
        }, 6000);
    }
}

let status = [
    {
        name: 'regarde des tickets',
        type: ActivityType.Custom,
    },
    {
        name: 'code un bot en js.',
        type: ActivityType.Custom,
    },
    {
        name: 'claim des tickets',
        type: ActivityType.Custom
    },
    {
        name: 'ouvre des tickets !!',
        type: ActivityType.Custom
    },
]
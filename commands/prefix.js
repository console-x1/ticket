const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    name: "prefix",
    description: "Afficher le prefix du bot.",
    aliases: [],
    permissions: [PermissionsBitField.Flags.ViewChannel],
    guildOwnerOnly: false,
    botOwnerOnly: false,
    async execute(client, message, args) {
        message.reply(`**Je ne marche qu'en /cmd, il n'y a donc pas de prefix** .`).catch(() => {});
    },
    async executeSlash(client, interaction) {
        interaction.reply(`**Je ne marche qu'en /cmd, il n'y a donc pas de prefix** .`).catch(() => {});
    },
    get data() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description)
    }
}
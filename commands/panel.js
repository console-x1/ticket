const { SlashCommandBuilder, PermissionsBitField, EmbedBuilder, Client } = require("discord.js");
const Discord = require('discord.js');
const client = new Client({
    intents: [
    ],
    partials: [
    ]
})
const embedTICKET = new EmbedBuilder()
    .setColor("DarkRed")
    .setTitle("création un __ticket__")
    .setDescription(`contacter l'administration, via un ticket !\n\nveuillez choisir la bonne option, si aucune option ne correspond, prener support ! Pour partenariat, echange de pub ou autre, utilisez colaboration`)
    .setTimestamp()
const btn_support = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder()
    .setCustomId("btn_SUPPORT")
    .setLabel("ticket support")
    .setStyle(Discord.ButtonStyle.Secondary)
    .setEmoji("🛠️"))
const btn_REPORT = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder()
    .setCustomId("btn_REPORT")
    .setLabel("REPORT")
    .setStyle(Discord.ButtonStyle.Danger)
    .setEmoji("⚠️"))
const btn_colab = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder()
    .setCustomId("btn_COLAB")
    .setLabel("colaboration")
    .setStyle(Discord.ButtonStyle.Success)
    .setEmoji("🤝"))
const btn_recrutement = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder()
    .setCustomId("btn_recrutement")
    .setLabel("recrutement")
    .setStyle(Discord.ButtonStyle.Primary)
    .setEmoji("⚔️"))

module.exports = {
    name: "panel-ticket",
    description: "Afficher le panel ticket du bot.",
    aliases: [],
    permissions: [PermissionsBitField.Administrateur],
    guildOwnerOnly: false,
    botOwnerOnly: false,
    async executeSlash(client, interaction) {
        interaction.channel.send({ embeds: [embedTICKET], components: [btn_REPORT, btn_colab, btn_recrutement, btn_support] }).catch(() => {});
    },
    get data() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description)
    }
}
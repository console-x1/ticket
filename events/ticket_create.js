const { PermissionsBitField, EmbedBuilder, Client } = require("discord.js");
const Discord = require('discord.js');
const client = new Client({
    intents: [
    ],
    partials: [
    ]
})
const bot = client

const btn_ticket_close = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder()
    .setCustomId("close")
    .setLabel("fermer le ticket")
    .setStyle(Discord.ButtonStyle.Danger)
    .setEmoji("🗑️")
)
const btn_claim = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder()
    .setCustomId("claim")
    .setLabel("claim le ticket")
    .setStyle(Discord.ButtonStyle.Primary)
    .setEmoji("👑")
)
const btn_unclaim = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder()
    .setCustomId("unclaim")
    .setLabel("unclaim le ticket")
    .setStyle(Discord.ButtonStyle.Primary)
    .setEmoji("✖")
)

module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (interaction.isButton()) {
            //if (interaction.member.has(PermissionsBitField.Flags.ViewChannel)) {
            ///////////////////////////////////////// SUPPORT ////////////////////////////////////////////////////////////////////////////////
            if (interaction.customId === "btn_SUPPORT") {
                let channel = await interaction.guild.channels.create({
                    name: `support-${interaction.user.username}`,
                    type: Discord.ChannelType.GuildText
                })
                await channel.setParent(interaction.channel.parent.id)
                await channel.permissionOverwrites.create(interaction.guild.roles.everyone.id, {
                    ViewChannel: false,
                    SendMessages: false,
                    ReadMessageHistory: false,
                    AttachFiles: false,
                    EmbedLinks: false,
                    ManageChannels: false,
                    ManageGuild: false,
                    ManageEvents: false,
                    ManageMessages: false,
                    ManageRoles: false,
                })
                await channel.permissionOverwrites.create(interaction.user.id, {
                    ViewChannel: true,
                    SendMessages: true,
                    AttachFiles: true,
                    ReadMessageHistory: true,
                    AttachFiles: true,
                    EmbedLinks: true,
                    ManageChannels: false,
                    ManageGuild: false,
                    ManageEvents: false,
                    ManageMessages: false,
                    ManageRoles: false,
                })

                //await channel.setParent(interaction.channel.parent.id)
                await channel.setTopic(interaction.user.id)
                interaction.reply({ content: `votre ticket a été correctement créé : ${channel}`, ephemeral: true })

                const embedDANSticket = new EmbedBuilder()
                    .setColor("Random")
                    .setTitle("bienvenue dans votre ticket support !")
                    .setDescription("un ADMINISTRATEUR va vous prendre en charge. Vous pouvez deja decrire votre motif de contacter le support !\n\nne pas claim si vous n'etes pas sur de pouvoir gere le probleme/aider le membre")

                await channel.send({ embeds: [embedDANSticket], components: [btn_ticket_close, btn_claim, btn_unclaim] })
                await channel.send(`@everyone`)
                    .then(() => {
                        channel.bulkDelete(1)
                    })
            }

            /////////////////////////// REPORT ///////////////////////////////////////

            if (interaction.customId === "btn_REPORT") {
                let channel = await interaction.guild.channels.create({
                    name: `report-${interaction.user.username}`,
                    type: Discord.ChannelType.GuildText
                })
                await channel.setParent(interaction.channel.parent.id)
                await channel.permissionOverwrites.create(interaction.guild.roles.everyone.id, {
                    ViewChannel: false,
                    SendMessages: false,
                    ReadMessageHistory: false,
                    AttachFiles: false,
                    EmbedLinks: false,
                    ManageChannels: false,
                    ManageGuild: false,
                    ManageEvents: false,
                    ManageMessages: false,
                    ManageRoles: false,
                })
                await channel.permissionOverwrites.create(interaction.user.id, {
                    ViewChannel: true,
                    SendMessages: true,
                    AttachFiles: true,
                    ReadMessageHistory: true,
                    AttachFiles: true,
                    EmbedLinks: true,
                    ManageChannels: false,
                    ManageGuild: false,
                    ManageEvents: false,
                    ManageMessages: false,
                    ManageRoles: false,
                })

                //await channel.setParent(interaction.channel.parent.id)
                await channel.setTopic(interaction.user.id)
                await interaction.reply({ content: `votre ticket a été correctement créé : ${channel}`, ephemeral: true })

                const embedDANSticket = new EmbedBuilder()
                    .setColor("Random")
                    .setTitle("bienvenue dans votre ticket REPORT !")
                    .setDescription("un ADMINISTRATEUR va vous prendre en charge. Vous pouvez deja envoyer un screen COMPLET, un explicatif ainsi que le pseudo et l'ID du membre\n\n:crown: SEUL LE FONDATEUR ET LES CO-FONDATEUR PEUVENT GERER LE TICKET !")

                await channel.send({ embeds: [embedDANSticket], components: [btn_ticket_close, btn_claim, btn_unclaim] })
                await channel.send(`@everyone`)
                    .then(() => {
                        channel.bulkDelete(1)
                    })
            }

            /////////////////////////// COLAB ///////////////////////////////////////

            if (interaction.customId === "btn_COLAB") {
                let channel = await interaction.guild.channels.create({
                    name: `colab-${interaction.user.username}`,
                    type: Discord.ChannelType.GuildText
                })
                await channel.setParent(interaction.channel.parent.id)
                await channel.permissionOverwrites.create(interaction.guild.roles.everyone.id, {
                    ViewChannel: false,
                    SendMessages: false,
                    ReadMessageHistory: false,
                    AttachFiles: false,
                    EmbedLinks: false,
                    ManageChannels: false,
                    ManageGuild: false,
                    ManageEvents: false,
                    ManageMessages: false,
                    ManageRoles: false,
                })
                await channel.permissionOverwrites.create(interaction.user.id, {
                    ViewChannel: true,
                    SendMessages: true,
                    AttachFiles: true,
                    ReadMessageHistory: true,
                    AttachFiles: true,
                    EmbedLinks: true,
                    ManageChannels: false,
                    ManageGuild: false,
                    ManageEvents: false,
                    ManageMessages: false,
                    ManageRoles: false,
                })

                //await channel.setParent(interaction.channel.parent.id)
                await channel.setTopic(interaction.user.id)
                await interaction.reply({ content: `votre ticket a été correctement créé : ${channel}`, ephemeral: true })

                const embedDANSticket = new EmbedBuilder()
                    .setColor("Random")
                    .setTitle("bienvenue dans votre ticket COLABORATION !")
                    .setDescription("un ADMINISTRATEUR va vous prendre en charge. Vous pouvez deja repondre a ces question : \n\nQuels sont les objectifs et les attentes pour ce partenariat ?\nQuels sont les avantages mutuels que chaque partie peut apporter à l'autre ?\nQuel est le niveau d'engagement et de collaboration nécessaire pour réussir ce partenariat ?\nQuels sont les mentions a utilisez ?")

                await channel.send({ embeds: [embedDANSticket], components: [btn_ticket_close, btn_claim, btn_unclaim] })
                await channel.send(`@everyone`)
                    .then(() => {
                        channel.bulkDelete(1)
                    })
            }

            /////////////////////////// RECRUTMENT ///////////////////////////////////////

            if (interaction.customId === "btn_recrutement") {
                let channel = await interaction.guild.channels.create({
                    name: `recrutement-${interaction.user.username}`,
                    type: Discord.ChannelType.GuildText
                })
                await channel.setParent(interaction.channel.parent.id)
                await channel.permissionOverwrites.create(interaction.guild.roles.everyone.id, {
                    ViewChannel: false,
                    SendMessages: false,
                    ReadMessageHistory: false,
                    AttachFiles: false,
                    EmbedLinks: false,
                    ManageChannels: false,
                    ManageGuild: false,
                    ManageEvents: false,
                    ManageMessages: false,
                    ManageRoles: false,
                })
                await channel.permissionOverwrites.create(interaction.user.id, {
                    ViewChannel: true,
                    SendMessages: true,
                    AttachFiles: true,
                    ReadMessageHistory: true,
                    AttachFiles: true,
                    EmbedLinks: true,
                    ManageChannels: false,
                    ManageGuild: false,
                    ManageEvents: false,
                    ManageMessages: false,
                    ManageRoles: false,
                })

                //await channel.setParent(interaction.channel.parent.id)
                await channel.setTopic(interaction.user.id)
                await interaction.reply({ content: `votre ticket a été correctement créé : ${channel}`, ephemeral: true })

                const embedDANSticket = new EmbedBuilder()
                    .setColor("Random")
                    .setTitle("bienvenue dans votre ticket recrutement !")
                    .setDescription("un ADMINISTRATEUR va vous prendre en charge. Vous serez sois staff soit modo du moins au debut. Vous pouvez deja repondre a ces question : \n\nQuelles sont vos qualifications et expériences pertinentes pour ce poste ?\nPourquoi voulez-vous travailler chez nous ?\nQuelles sont vos forces et faiblesses ?\nPouvez-vous décrire une situation où vous avez fait preuve de créativité ou de résolution de problèmes ?\nComment gérez-vous le stress dans ce milieu ?\nQu'est-ce qui vous motive au travail ?\nComment travaillez-vous en équipe ?\nPouvez-vous donner un exemple de réussite  dont vous êtes fier(e) ?\nAvez-vous des questions à poser sur le poste ?\n\nSEUL LE FONDATEUR ET LES CO-FONDATEUR PEUVENT GERER LE TICKET !")

                await channel.send({ embeds: [embedDANSticket], components: [btn_ticket_close, btn_claim, btn_unclaim] })
                await channel.send(`@everyone`)
                    .then(() => {
                        channel.bulkDelete(1)
                    })
            }
            /*}
            else {
                interaction.reply({ content: "vous n'avez pas les permissions nessessaires (voir des salons)", ephemeral: true })
            }*/
        }
    }
}
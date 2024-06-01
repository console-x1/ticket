const { Client } = require("discord.js");
const Discord = require('discord.js');
const client = new Client({
    intents: [
    ],
    partials: [
    ]
})
const bot = client

module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (interaction.isButton()) {
            if (interaction.customId === "claim") {
                let channel = await interaction.guild.channels
                const user = client.users.cache.get(interaction.channel.topic)
                if (user == interaction.user.id) { return interaction.reply({ content: `vous ne pouvez pas **claim** votre propre ticket`, ephemeral: true})}
                try { await user.send(`**votre ticket sur ${interaction.guild.name} a été __claim__ par ${interaction.user}**`) } catch (err) { }
                await interaction.reply(`**votre ticket a été claim par ${interaction.user} !**`)
                await interaction.channel.send(`@everyone`)
                    .then(() => {
                        interaction.channel.bulkDelete(1)
                    })
                console.log(`ticket de ${user} claim par ${interaction.user.username}`)
            }
            if (interaction.customId === "unclaim") {
                let channel = await interaction.guild.channels
                const user = client.users.cache.get(interaction.channel.topic)
                if (user == interaction.user.id) { return interaction.reply({ content: `vous ne pouvez pas **unclaim** votre propre ticket`, ephemeral: true})}
                await interaction.reply(`**votre ticket n'est pas/plus claim par ${interaction.user} !**`)
                await interaction.channel.send(`@here`)
                    .then(() => {
                        interaction.channel.bulkDelete(1)
                    })
                console.log(`ticket de <@${user}> unclaim par ${interaction.user.username}`)
            }
            if (interaction.customId === "close") {
                const user = client.users.cache.get(interaction.channel.topic)
                if (user == interaction.user.id) { return interaction.reply({ content: `vous ne pouvez pas **close** votre propre ticket`, ephemeral: true})}
                try { await user.send(`votre ticket sur ${interaction.guild.name} a été fermé par ${interaction.user.username}`) } catch (err) { }

                await interaction.channel.delete()
                console.log(`le ticket de ${user} a été close par ${interaction.user.username}`)
            }
        }
    }
}



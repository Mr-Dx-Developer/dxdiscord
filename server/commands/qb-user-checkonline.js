/**
 * This file is part of dxdiscord.
 * Copyright (C) 2021 Mr_Dx
 * source: <https://github.com/Mr-Dx-Developer/dxdiscord>
 *
 * This work is licensed under the Creative Commons
 * Attribution-NonCommercial-ShareAlike 4.0 International License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
 * or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
 */

module.exports = {
    name: "onlinecheck",
    type: "USER",
    role: "mod",

    run: async (client, interaction, args) => {
        const player = await client.utils.getPlayerFromDiscordId(interaction.targetId);
        if (!player) return interaction.reply({ content: `<@${interaction.targetId}> is offline right now.`, ephemeral: true });
        const qbplayer = client.QBCore.Functions.GetPlayer(parseInt(player));
        if (!qbplayer) return interaction.reply({ content: `<@${interaction.targetId}> is online but not loaded in.`, ephemeral: true });
        return interaction.reply({ content: `<@${interaction.targetId}> is online! Playing as ${qbplayer.PlayerData.charinfo.firstname} ${qbplayer.PlayerData.charinfo.lastname} (${qbplayer.PlayerData.citizenid})`, ephemeral: true });
    },
};

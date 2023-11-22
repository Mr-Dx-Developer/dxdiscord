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
    name: "revive",
    description: "Raise a downed player to full health and stats",
    role: "admin",

    options: [
        {
            name: "id",
            description: "Player's current id",
            required: true,
            type: "INTEGER",
        },
    ],

    run: async (client, interaction, args) => {
        if (!GetPlayerName(args.id)) return interaction.reply({ content: "This ID seems invalid.", ephemeral: true });
        emitNet("hospital:client:Revive", args.id);
        client.utils.log.info(`[${interaction.member.displayName}] revived ${GetPlayerName(args.id)} (${args.id})`);
        return interaction.reply({ content: `${GetPlayerName(args.id)} (${args.id}) has been fully healed.`, ephemeral: false });
    },
};

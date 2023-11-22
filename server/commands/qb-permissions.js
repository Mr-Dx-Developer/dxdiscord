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
    name: "permissions",
    description: "Manage player's in-city permissions",
    role: "god",

    options: [
        {
            type: "SUB_COMMAND",
            name: "add",
            description: "add a permission to a player",
            options: [
                {
                    name: "id",
                    description: "Player's current id",
                    required: true,
                    type: "INTEGER",
                },
                {
                    name: "permission",
                    description: "permission to give",
                    required: true,
                    type: "STRING",
                    choices: [
                        { name: "admin", value: "admin" },
                        { name: "god", value: "god" },
                    ],
                },
            ],
        },
        {
            type: "SUB_COMMAND",
            name: "remove",
            description: "remove all permissions from a player",
            options: [
                {
                    name: "id",
                    description: "Player's current id",
                    required: true,
                    type: "INTEGER",
                },
            ],
        },
    ],

    run: async (client, interaction, args) => {
        if (!GetPlayerName(args.id)) return interaction.reply({ content: "This ID seems invalid.", ephemeral: true });
        if (args.add) {
            client.QBCore.Functions.AddPermission(args.id, args.permission);
            client.utils.log.info(`[${interaction.member.displayName}] Gave ${args.id} the ${args.permission} permission`);
            return interaction.reply({ content: `${GetPlayerName(args.id)} (${args.id}) was given ${args.permission} permission.`, ephemeral: false });
        } else if (args.remove) {
            client.QBCore.Functions.RemovePermission(args.id);
            client.utils.log.info(`[${interaction.member.displayName}] Removed ${args.id} permissions`);
            return interaction.reply({ content: `${GetPlayerName(args.id)} (${args.id}) had their permissions removed.`, ephemeral: false });
        }
    },
};

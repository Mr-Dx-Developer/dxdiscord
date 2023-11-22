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
    name: "onlinecount",
    description: "Number of players currently online",

    run: async (client, interaction) => {
        const playerNumber = GetNumPlayerIndices();
        let message = "Nobody is online right now.";
        if (playerNumber === 1) message = "There is 1 person online right now.";
        else if (playerNumber > 1) message = `There are ${playerNumber} people online right now.`;
        return interaction.reply({ content: message, ephemeral: false });
    },
};

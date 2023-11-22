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
    name: "ready",
    once: true,
    run: async (client) => {
        if (client.config.EnableDiscordSlashCommands) {
            const guild = client.guilds.cache.get(client.config.DiscordGuildId);
            if (!guild) return client.utils.log.error("DISCORD SERVER NOT FOUND - Is your config for 'DiscordGuildId' set correctly?");
            await guild.commands.set(client.arrayOfCommands).catch((error) => client.utils.log.handler("error", error));
        }
        if (client.config.EnableBotStatusMessages && client.config.BotStatusMessages) statusUpdater(client);
        client.utils.log.info(`Logged in as ${client.user.tag}`);
        client.utils.log.info("Enjoying dxdiscord? Consider supporting it at patreon.com/dx or paypal.me/dx <3");
        emit("dxdiscord:ready");
    },
};

async function statusUpdater(client) {
    setInterval(function() {
        try {
            const msg = client.utils.replaceGlobals(client, client.config.BotStatusMessages[Math.floor(Math.random() * client.config.BotStatusMessages.length)]);
            client.user.setActivity({ name: msg, type: "PLAYING" });
        } catch (e) {
            // Just gonna void these errors..
        }
    }, 20000);
}

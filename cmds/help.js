module.exports = {
    description: "Show Commands and the descriptions",
    role: "user",
    credits: "rejardgwapo",
    cooldown: 16,		
    execute(api, event, args, commands) {
        let helpMessage = '𝗡𝗢𝗩𝗔 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦\n';
        helpMessage += '🤖═══════════════🤖\n';
        commands.forEach((command, name) => {
            helpMessage += `𝙽𝚊𝚖𝚎: ${name}\n`;
            helpMessage += `𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗: ${command.description || 'No description provided'}\n`;
            helpMessage += `𝚁𝚘𝚕𝚎: ${command.role || 'user'}\n`;
            helpMessage += `Credits: ${command.credits || 'YAFB Community'}\n`;
            helpMessage += `Costs: ${command.coins !== undefined ? command.coins : 'Free'}\n`;
            helpMessage += `Cooldown: ${command.cooldown !== undefined ? command.cooldown : 'No cooldown'}\n`;
            helpMessage += '💮═══════════════💮\n';
        });
        helpMessage += '📞Feedback from owner https://www.facebook.com/profile.php?id=61577040643519';
        api.sendMessage(helpMessage, event.threadID);
    }
};

const discord = require ('discord.js');

var client = new  discord.Client();

const token = "NTY1NTI4NjIwMzcwNDkzNDQx.XK3vmw.U_OxjIVk5MQveBEH2HZjV0wkUp0"

client.on ("ready", () => {
    console.log ("Bot is Ready!");

    client.user.setActivity("${msg.guild.memberCount}", {type: "LISTENING"});
});
const prefix = ";"
client.on ("message", (message) => {
    
    if (message.author.bot) return;
    
    message.content.toLowerCase;

    if (message.content.startsWith (prefix + "test")) {
        message.reply ("Bot is online!");
 }

    if (message.content.startsWith (":eyes:")) {
        message.channel.send(":eyes:");
 }
    
    if (message.content.startsWith (prefix + "help")) {
        const embed = discord.RichEmbed().setTitle("Command List").addField("Command 1","Description").addField("Command 2","Description")
        message.channel.send(embed)
 }  

    if (message.content.startsWith (prefix + "membercount")) {
        message.reply ("There are currently ${msg.guild.memberCount} Members!");
 }


});

client.login (token)

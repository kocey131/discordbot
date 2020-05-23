const Discord = require("discord.js");
const { Client, Util, MessageAttachment} = require("discord.js");

const hook = new Discord.WebhookClient('713245002431594533', 'O3WmrcJvrynu2_mdNk3t9pl7lIujnKS4qTqCRx6ZD025CZsegYK7Gmt0Mo7g9detok_m');
hook.send('Isekriyid **KoKo** <== "**ON**"'); 
const bot = new Client({
    disableMentions: "all"
});
bot.once("ready",async() =>{
    console.log(`${bot.user.username} yettwahega`);
}); 
let statuses = [
    `cv`,
    
]
setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, {type: "STREAMING"});

}, 5000)

bot.on("guildMemberAdd", async member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "卐-welcome-卐")
    if (!channel) return;

    channel.send(`Azul, ${member}, cv. Check out <#713428235689525299> to customize your role`)
    member.send ("cv, Check out <#713428235689525299> to customize your role")
})
function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith('<@') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }

        return bot.users.cache.get(mention);
    }
}

bot.on("message", async message=>{
    
if(message.author.bot || message.channel.type==="dm")return;
    let prefix="."; 
    let messageArray=message.content.split(" ")
    let cmd=messageArray[0]; 
    let args=messageArray.slice(1);
    
    
    
    if(cmd===`.cv`){
        return message.reply("oui oui cv et toi")
    }
    if (cmd === ".userinfo" || cmd === ".ui") {
        
       
        let uEmbed = new Client.MessageEmbed()
        .setColor("#7289DA")
      .setTitle("Server Info")
      .setThumbnail(message.guild.iconURL())
      .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL())
      .addField("**Ismis:**", `${message.author.username}`, true)
      .addField("**#:**", `${message.author.discriminator}`, true)
      .addField("**ID:**", `${message.author.id}`, true)
      .addField("**Status:**", `${message.author.presence.status}`, true)
      .addField("**Créer le:**", `${message.author.createdAt}`, true)
      .setFooter(`KoKo's BOT`, bot.user.displayAvatarURL());
  
      message.channel.send({embed: uEmbed});
    }  
    
    if (cmd === '.avatar') {
        if (args[0]) {
            const user = getUserFromMention(args[0]);
            if (!user) {
                return message.reply('Please use a proper mention if you want to see someone else\'s avatar.');
            }
    
            return message.channel.send(`**${user.username}**'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
        }
    
        return message.channel.send(`**${message.author.username}**, your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
    }
      
    if (cmd === '.say') {
       
        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.reply(`qwd olach les permissions`)
    
        let argsresult;
        let mChannel = message.mentions.channels.first()
    
        message.delete()
        if(mChannel) {
            argsresult = args.slice(1).join(" ")
            mChannel.send(argsresult)
        } else {
            argsresult = args.join(" ")
            message.channel.send(argsresult)
        }
        }
   
        if (!message.guild) return;
        if (message.content.startsWith('.kick')) {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
        member
        .kick('Optional reason that will display in the audit logs')
        .then(() => {
            message.reply(`ad isahel rebi... ${user.tag}`);
        })
        .catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
        });
    } else {
      // The mentioned user isn't in this guild
      message.reply("That user isn't in this guild!");
    }
    // Otherwise, if no user was mentioned
  } else {
    message.reply("Mention a user to kick.");
  }
}

if(cmd===".help"){
    let hEmbed = new Client.MessageEmbed()
        .setColor("#7289DA")
        .setThumbnail(bot.user.displayAvatarURL())
        .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
        .setDescription(`
__**Commands List**__
> \`say\` > **\`parler avec le bot\`**
> \`userinfo\` > **\`info sur l'utilisateur\`**
> \`cv\`, \`ui\`, \`avatar\``)
        
        message.channel.send({embed: hEmbed});
}

if (!message.guild) return;
        if (message.content.startsWith('.ban')) {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
        member
        .ban( {
            reason:'No reason' ,
        })
        .then(() => {
            message.channel.send(`ad isahel rebi feelak... ${user.tag}`);
        })
        .catch(err => {
            message.reply('ur zmiregh ara ad banigh');
            console.error(err);
        });
    } else {
      // The mentioned user isn't in this guild
      message.reply("That user isn't in this guild!");
    }
    // Otherwise, if no user was mentioned
  } else {
    message.reply("Mention a user to ban.");
  }
}



});  






bot.login("Njc4NjQ4NjM5NTEzNDI3OTc4.XsdLBA.9GRRVyHNIbgSe4NZoyr8czGbJDk"); 

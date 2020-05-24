const Discord = require("discord.js");
const { Client, Util, MessageAttachment, MessageEmbed} = require("discord.js");

//const hook = new Discord.WebhookClient('713245002431594533', 'O3WmrcJvrynu2_mdNk3t9pl7lIujnKS4qTqCRx6ZD025CZsegYK7Gmt0Mo7g9detok_m');
//hook.send('Isekriyid **KoKo** <== "**ON**"'); 
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
  if(message.author.bot) return;
  console.log(message.mentions);
  if(message.content.toLowerCase().startsWith('.stats')) {
    const args = message.content.split(' ');
    console.log(args);
    if(args.length > 2) {
      message.channel.send(`Incorrect Usage: .stats | .stats <user_id> | .stats @mention`);
    } else if(args.length === 2) {
      const member = message.mentions.members.size === 1 ? 
      message.mentions.members.first() :
      message.guild.members.cache.get(args[1]);
      if(member) {
        const embed = new MessageEmbed()
          .setAuthor(`${member.user.tag} (${member.id})`, member.user.displayAvatarURL())
          .setThumbnail(member.user.displayAvatarURL())
          .addField('Created On', member.user.createdAt.toLocaleString(), true)
          .addField('Joined On', member.joinedAt, true)
          .addField('Kickable', member.kickable, false)
          .addField('Voice Channel', member.voice.channel ? member.voice.channel.name + `(${member.voice.channel.id})` : 'None')
          .addField('Status', member.presence.status)
          .setDescription(`${member.roles.cache.map(role => role.toString()).join(' ')}`);
          message.channel.send(embed);
      } else {
        message.channel.send(`Doufighara hbibna agui faut le **mentionner**, je trouve pas => **${args[1]}**`);
      }
      
    } else {
      const { guild } = message;
      const embed = new MessageEmbed()
        .setAuthor(`${guild.name} (${guild.id})`, guild.iconURL())
        .setThumbnail(guild.iconURL())
        .addField('Created On', guild.createdAt.toLocaleString(), true)
        .addField('Guild Owner', guild.owner.user.tag)
        .addField('Total Members', guild.memberCount, true)
        .addField('Total Real Members', guild.members.cache.filter(member => !member.user.bot).size, true)
        .addField('Total Bots', guild.members.cache.filter(member => member.user.bot).size, true)
        .addField('Total Channels', guild.channels.cache.size, true)
        .addField('Total Text Channels', guild.channels.cache.filter(ch => ch.type === 'text').size, true)
        .addField('Total Voice Channels', guild.channels.cache.filter(ch => ch.type === 'voice').size, true)
        .setColor('#5CC5FF')
        .setDescription(`${guild.roles.cache.map(role => role.toString()).join(' ')}`);
      message.channel.send(embed);
    }
  }
});

bot.on("message", async message=>{

    
if(message.author.bot || message.channel.type==="dm")return;
    let prefix="."; 
    let messageArray=message.content.split(" ")
    let cmd=messageArray[0]; 
    let args=messageArray.slice(1);
    
    
    
    if(cmd===`.cv`){
        return message.reply("oui oui cv et toi")
    }
    if (cmd === ".userinfo") {
        
       
        
          let uEmbed = new Discord.MessageEmbed()
          .setColor("#7289DA")
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL())
        .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL())
        .addField("**Ismis:**", `${message.author.username}`, true)
        .addField("**#:**", `${message.author.discriminator}`, true)
        .addField("**ID:**", `${message.author.id}`, true)
        .addField("**Status:**", `${message.author.presence.status}`, true)
        .addField("**Créer le:**", `${message.author.createdAt}`, true)
        .setFooter(`KoKo's Bot`, bot.user.displayAvatarURL());
    
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

if (cmd === ".isreal" || cmd === ".Isreal") {
  return message.reply("Isreal? you mean Palestine lmao")
}


if (cmd === ".help" ) {
        let hEmbed = new Discord.MessageEmbed()
            .setColor("#7289DA")
            .setThumbnail(bot.user.displayAvatarURL())
            .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
            
            .setDescription(`
__**Commands List**__
> \`say\` > **\`parler avec le bot\`**
> \`userinfo\` > **\`info sur l'utilisateur\`**
> \`cv\`, \`avatar\`
> \`stats\`
`)
        
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

bot.on('messageDelete', message => {
    if(!message.partial) {
        const channel = bot.channels.cache.get('713546625901002803');
        if(channel) {
            const embed = new MessageEmbed()
                .setTitle('Deleted Message')
                .addField('Author', `${message.author.tag} (${message.author.id})`, true)
                .addField('Channel', `${message.channel.name} (${message.channel.id})`, true)
                .setDescription(message.content)
                .setTimestamp();
            channel.send(embed);
        }
    }

  
});


const usersMap = new Map();
const LIMIT = 5;
const TIME = 7000;
const DIFF = 3000;

bot.on('message', message => {
  if(message.author.bot) return;
  if(usersMap.has(message.author.id)) {
    const userData = usersMap.get(message.author.id);
    const { lastMessage, timer } = userData;
    const difference = message.createdTimestamp - lastMessage.createdTimestamp;
    let msgCount = userData.msgCount;
    console.log(difference);
    if(difference > DIFF) {
      clearTimeout(timer);
      console.log('Cleared timeout');
      userData.msgCount = 1;
      userData.lastMessage = message;
      userData.timer = setTimeout(() => {
        usersMap.delete(message.author.id);
        console.log('Removed from RESET.');
      }, TIME);
      usersMap.set(message.author.id, userData);
    }
    else {
      ++msgCount;
      if(parseInt(msgCount) === LIMIT) {
        const role = message.guild.roles.cache.get('712712501527052350');
        message.member.roles.add(role);
        message.channel.send('You have been muted.');
        setTimeout(() => {
          message.member.roles.remove(role);
          message.channel.send('You have been unmuted');
        }, TIME);
      } else {
        userData.msgCount = msgCount;
        usersMap.set(message.author.id, userData);
      }
    }
  }
  else {
    let fn = setTimeout(() => {
      usersMap.delete(message.author.id);
      console.log('Removed from map.');
    }, TIME);
    usersMap.set(message.author.id, {
      msgCount: 1,
      lastMessage: message,
      timer: fn
    });
  }
});

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
console.log(Date.now() + " Ping Received");
response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);




});  






bot.login("Njc4NjQ4NjM5NTEzNDI3OTc4.Xsimww.tDlpuY0lUA-eHLuZtFiQ1kDmQnk"); 

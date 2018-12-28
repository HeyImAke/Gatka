const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "+";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "511280736452608041"; // ايدي السررفر
var channel = "528257453926645760";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login("NTI4MjU2MTQ5MjE3MzQ1NTc2.DwfqUA.iAiJRMO8Pb0L92z834MRbR6d-n4");

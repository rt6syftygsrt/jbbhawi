
const Discord = require('discord.js');
const client = new Discord.Client();




client.login('NTAzNTQzMTM1NjE2MzY4NjQw.DzIHtw.JzrIYm0ho19XQKEUfEtT64o_ZJg'); 



client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by safa7');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

// playing
client.on('ready', () => {                           
client.user.setGame(``,'https://www.twitch.tv/tarikrs');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`-help | On 20 Servers`,'https://www.twitch.tv/v5bz');
});



         
client.on('message', message => {
     if (message.content === "help-") {
message.author.send("**اوامر البوت**" + `  **
لمسح شات اكتب  مسح
 
لو تبي تنشى شات كتابي اكتب --->ch

لو تبي تنشى روم صوتي اكتب --->cv 

لوتبي تقفل شات اكتب ---> $mu

لو تبي تفك شات اكتب $un
**`);
    }
});     
            

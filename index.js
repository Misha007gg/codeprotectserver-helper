const Discord = require('discord.js');
const robot = new Discord.Client();

robot.login("NDgzNTExMjgzNzk5NTU2MTA2.DmUgxg.PRN5YypwSh35vNdTWAPJcsKWLso")

robot.on('message',(message)=> {
  if(message.content=="c!help"){
       message.reply("``Здраствуйте - Hello, Я бот , Выбири категорию - c!moder,c!custom,c!GC.``");
  }
});  

robot.on('message',(message)=> {
    if(message.content=="c!moder"){
         message.reply("``с!mute,c!ban,c!kick,c!say - Модераторские команды но они все в разроботке!``");
    }
  });  

  robot.on('message',(message)=> {
    if(message.content=="c!gc"){
         message.reply("``owner:{owner}``");
    }
  });  

  robot.on('message',(message)=> {
    if(message.content=="c!custom"){
         message.reply("``Простите но Легулярных систем нет``");
    }
  });  

  robot.on('message',(message)=> {
    if(message.content=="c!kick"){
         message.reply("``Комманда в разроботке!``");
    }
  });  

  robot.on('message',(message)=> {
    if(message.content=="c!ban"){
         message.reply("``Комманда в разроботке!``");
    }
  });  
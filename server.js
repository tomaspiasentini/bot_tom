const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Estoy listo pa");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("-hola")) {
     message.channel.send("que onda rey");
   }
 });
 
 client.login("NzQwOTc3MDQ3NTU1NTM4OTk2.Xyw2pg._wnsULdXIXl9oIkuavxDTpgE5WE");
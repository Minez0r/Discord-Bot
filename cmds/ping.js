const Discord = module.require("discord.js");
const fs = require("fs");
const { Client, MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args,)=>{
    message.channel.send('pong!');
};
module.exports.help = {
    name: "пинг"
}
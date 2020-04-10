const Discord = module.require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
const fs = require("fs");
module.exports.run = async (bot, message, args)=>{
    const embed = new MessageEmbed()
      .setTitle('HELP!')
      .setColor(0xff0000)
      .setDescription("В боте присутствуют такие комманды на данный момент, это:\n\n.пинг - бот отвечает 'pong!'\n\n.кал <пример, который вы хотите посчитать> - пример записывать в одну строку. * - умножение, / - деление, ^ - возвидение в степени, % - остаток деления на число, чтобы высчитать проценты числа, нужно написать .кал <процент> <число>\n\n.хелп - помощь с коммандами\n\n.чис <сколько сообщений удалить> - эта команда удаляет сообщения. Для этого вам нужно быть админом\n\n.инфа - информация о сервере\n\n.нап <время, например 5s или 2m> <само сообщение о напоминании>\n\n.зам - внизу есть строчка о том, как изменять заметки\n\n.зап <обращение к пользователю> <число> - заплатить определённую сумму\n\n.бал - проверить свой кошелёк\n\n.проф - отображает ваш профиль\n\n.ранд <число> - отображает случайное число от 1 до вашего числа\n\n.авто - автогайд по Противостоянию\n\n.бал - проверить свой кошелёк\n\n.гайд - гайд по боту и игре в нём");

   message.channel.send(embed);
};
module.exports.help = {
    name: "хелп"
}
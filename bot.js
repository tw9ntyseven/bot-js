const express = require("express") 
const bodyParser = require("body-parser")
const readline = require('readline')
const { Botact } = require("botact") 
const prompt = require('prompt');
//var readline = require('readline-sync');

prompt.start();
const server = express() 
const bot = new Botact({ 
token: '8fcad673889ea7fb096fe167124f0412e5d609e4b472d2601b043479d8e657a2892bc2c2e53e80f71d566', 
confirmation: '157a4020' 
}) 

bot.on(function (ctx) { 
console.log(ctx.body) 
ctx.reply('Не понимаю → ' + ctx.body + ' ← попробуй написать -команды-') 

}) 


/*bot.on(function (ctx) { 
console.log(ctx.body) 
ctx.reply('Сам '+ctx.body) 

}) 
*/
//bot.command('Привет', function (ctx) { 
//ctx.reply('Здравствуй, если хочешь пообщаться напиши -команды- и узнай что я умею') 
//}) 


bot.command('кинь' , function(ctx){
	var words = ['word1', 'word2'];
	var random = Math.floor(Math.random() * ((words.length - 1) + 1));
	if(random==0) ctx.reply('Орел')
	else ctx.reply('Решка')
})


bot.command('анекдот', function(ctx){
	var arr = ['В 2119 году я захвачу мир. ХА ХА ','Это пока единственный "анекдот", который я знаю }:)'];
	ctx.reply(arr)

})


bot.command('Код' , function(ctx){
	var arg = prompt(["Введите arg?"], arg)
switch (arg) {
  case '0':
  case '1':
    reply( 'Один или ноль' );

  case '2':
    reply( 'Два' );
    break;

  case 3:
    reply( 'Никогда не выполнится' );

  default:
    reply('Неизвестное значение: ' + arg)
    ctx.reply(arg);
}
})



bot.command('Время' , function(ctx){ 
const date = new Date() 

const y = date.getFullYear() 
const h = date.getHours() 
const m = date.getMinutes() 
const s = date.getSeconds() 
const time = 'Сейчас '+ y + ' год '+ h +':'+ m +':'+ s 

ctx.reply(time) 
}) 

bot.on(({ reply }) => {reply('что?')}) 
bot.on('audio', ({ reply }) => reply('Слушаю...Крутая музыка :)')) 
bot.on('photo', ({ reply }) => reply('Воу... замечательное фото')) 
bot.hears(/(Погода?|погода?)/, ({ reply }) => reply(' Я нашел твою погоду по этой ссылке → https://yandex.ru/pogoda/')) 
bot.hears(/(Привет?|привет?|ку)/, ({ reply }) => reply('Здравствуй, если хочешь пообщаться напиши -команды- и узнай что я умею')) 
bot.hears(/(Команды?|команды?)/, ({ reply }) => reply('Вот мои команды:\n-Время\n-Погода\n-Напиши боту "кинь" что бы кинуть монетку\n-Отправь мне фото или музыку я попробую оценить :)')) 
bot.hears(/(Как дела?|как дела|как дела?)/, ({ reply }) => reply('Хорошо, спасибо')) 
bot.hears(/(создатель?|Создатель?)/, ({ reply }) => reply('Я только знаю, что его звать Владислав\nНадеюсь за это он меня не отключит...')) 

server.use(bodyParser.json()) 

server.post('/', bot.listen) 

server.listen(80)

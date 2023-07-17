require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const token = process.env.bottk
const bot = new TelegramBot(token, { polling: true })

bot.onText(/^따라해/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = match.input // 메아리
  console.log(resp)
  bot.sendMessage(chatId, resp)
})

bot.onText(/^ㅇㅇ/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = 'http://mydb.iptime.org/live/weather.png?1'
  bot.sendPhoto(chatId, resp)
})
bot.on('message', (msg) => {
  const chatId = msg.chat.id
  console.log(msg)
  //   bot.sendMessage(chatId, '뭐라카노?')
})

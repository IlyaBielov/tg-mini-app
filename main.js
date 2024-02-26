import { Telegraf, Markup } from "telegraf"
import { message } from "telegraf/filters"

const token = '7009092924:AAGgk9eoZeJSJ6PAMrTohM5JNCETX7zPbcM'
const webAppUrl = 'https://ilyaangulartelegrambot.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
    'Welcome to the bot!',
    Markup.keyboard([Markup.button.webApp('Open feedback', `${webAppUrl}/feedback`)])
  )
})

bot.on(message('web_app_data'), async ctx => {
  const data = ctx.webAppData.data.json()
  ctx.reply(`Your message: ${data?.feedback}` ?? 'empty message')
});

bot.launch()

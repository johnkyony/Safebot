const Scene = require('telegraf/scenes/base')
const Markup = require('telegraf/markup')
const mainMenuScene = new Scene('mainMenuScene')
const Extra = require('telegraf/extra')

mainMenuScene.enter((ctx) => {
  return ctx.reply('Choose your option below or type cancel to quit ', Markup
  .keyboard([
    ['SOS - Stranded'],
    ['Safe Places'],
    ['Panick Button']

  ])
  .oneTime()
  .resize()
  .extra())
})

mainMenuScene.hears('SOS - Stranded' , ctx =>  ctx.scene.enter('sosScene'))
mainMenuScene.hears('Safe Places' , ctx => ctx.scene.enter('safePlacesScene'))
mainMenuScene.hears('Panick Button' , ctx => ctx.scene.enter('panickButtonScene'))



module.exports = mainMenuScene
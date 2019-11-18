const Scene = require('telegraf/scenes/base')
const Markup = require('telegraf/markup')
const panickButtonScene = new Scene('panickButtonScene')
const Extra = require('telegraf/extra')


panickButtonScene.enter( (ctx) => {
  ctx.reply('please share your current location ' , Extra.markup((markup) => {
    return markup.resize()
    .keyboard([
      markup.locationRequestButton('Share your Location')
    ])
    .oneTime()
  }))

})

panickButtonScene.on('location' , (ctx) => {
  ctx.reply('A panick  sms is being sent shortly on your behalf to both your emergency contacts with your imei number so your phone can be tracked by the police')
  ctx.scene.enter('mainMenuScene')
})

panickButtonScene.hears('menu' , ctx => ctx.scene.enter('mainMenuScene'))
panickButtonScene.hears('Back' , ctx => ctx.scene.enter('mainMenuScene'))





module.exports = panickButtonScene
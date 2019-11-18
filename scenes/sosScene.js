const Scene = require('telegraf/scenes/base')
const Markup = require('telegraf/markup')
const sosScene = new Scene('sosScene')
const Extra = require('telegraf/extra')

sosScene.enter((ctx) => {
  return ctx.reply('Enter the number your going to send the sos to' , Markup
  .keyboard([
    ['Back']
  ])
  .oneTime()
  .resize()
  .extra())
 
  
})

sosScene.hears('Back' , ctx => ctx.scene.enter('mainMenuScene'))

sosScene.hears([/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g] , ctx => {
  ctx.reply('please share your current location ' , Extra.markup((markup) => {
    return markup.resize()
    .keyboard([
      markup.locationRequestButton('Share your Location')
    ])
    .oneTime()
  }))

})

sosScene.on('location' , (ctx) => {
  ctx.reply('An sos sms is being sent shortly on your behalf')
  ctx.scene.enter('mainMenuScene')
})


module.exports = sosScene
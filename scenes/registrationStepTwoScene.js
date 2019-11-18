const Scene = require('telegraf/scenes/base')
const Markup = require('telegraf/markup')
const registrationStepTwoScene = new Scene('registrationStepTwoScene')
const Extra = require('telegraf/extra')


registrationStepTwoScene.enter((ctx) => {
  return ctx.reply('Enter first Emergency number')
})

registrationStepTwoScene.hears([/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g] , function(ctx){
  ctx.session.firstIceNumber = ctx.message.text
  ctx.scene.enter('registrationStepThreeScene')
})

module.exports = registrationStepTwoScene
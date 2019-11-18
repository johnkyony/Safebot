const Scene = require('telegraf/scenes/base')
const Markup = require('telegraf/markup')
const registrationStepThreeScene = new Scene('registrationStepThreeScene')
const Extra = require('telegraf/extra')
const addUser = require('../utils')


registrationStepThreeScene.enter((ctx) => {
  return ctx.reply('Enter Second Emergency number')
})

registrationStepThreeScene.hears([/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g] , function(ctx){
  ctx.session.secondIceNumber = ctx.message.text
  // addUser.addUserDetails(ctx)
  ctx.scene.enter('mainMenuScene')
})

module.exports = registrationStepThreeScene
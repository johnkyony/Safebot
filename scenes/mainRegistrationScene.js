const Scene = require('telegraf/scenes/base')
const Markup = require('telegraf/markup')
const Extra = require('telegraf/extra')
const addUser = require('../utils')
const mainRegistrationScene = new Scene('mainRegistrationScene')

mainRegistrationScene.enter(function(ctx){
  ctx.reply("Please share your contact number with us.To begin registration" , Extra.markup((markup) => {
    return markup.resize()
    .keyboard([
      markup.contactRequestButton('Share your mobile number'),
    ])
    .oneTime()
  }))
})

mainRegistrationScene.on("contact" , function(ctx) {
  ctx.reply('Thank you for registering your with this Telegram profile , you shall proceed to the next step')
  .then(function (){
    ctx.session.contact_number = ctx.update.message.contact.phone_number
    
    ctx.scene.enter('registrationStepOneScene')
  })

})

module.exports = mainRegistrationScene
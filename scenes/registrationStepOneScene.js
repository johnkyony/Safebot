const Scene = require('telegraf/scenes/base')
const Markup = require('telegraf/markup')
const registrationStepOneScene = new Scene('registrationStepOneScene')
const Extra = require('telegraf/extra')



registrationStepOneScene.enter(function (ctx){
 return  ctx.reply('Please input your Phone IMEI for emergency tracking in the next step' , Markup 
 .keyboard([
  ['Help finding the IMEI']
  ])
  .oneTime()
  .resize()
  .extra()
)
  
})

registrationStepOneScene.hears('Help finding the IMEI' , function(ctx){
  ctx.reply("The IMEI or MEID number for your mobile phone acts as a unique identifier for that device. No two devices will have the same IMEI or MEID, which makes it a very useful tool for tracking lost or stolen cell phones. You can quickly retrieve and record your phone's IMEI or MEID number in a variety of different ways, depending on your device.")
  return   ctx.reply(" You can retrieve the IMEI/MEID number on virtually any phone by dialing in the universal code. Dial *#06#. You typically will not need to press the Call or Send button, as the IMEI/MEID number will appear as soon as you finish dialing the code.")

})


registrationStepOneScene.on('message' , function (ctx){
  ctx.session.imei = ctx.message.text
  ctx.scene.enter('registrationStepTwoScene')

})

module.exports = registrationStepOneScene
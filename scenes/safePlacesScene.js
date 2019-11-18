const Scene = require('telegraf/scenes/base')
const Markup = require('telegraf/markup')
const safePlacesScene = new Scene('safePlacesScene')
const Extra = require('telegraf/extra')

safePlacesScene.enter((ctx) => {
  ctx.reply('Choose one of the options below , shall send you direction to the closest on around you or type menu to main menu ' , Markup
  .keyboard([
    ['Police Station'],
    ['Hospital'], 
    ['Banks']
  ])
  .oneTime()
  .resize()
  .extra())
  
})

safePlacesScene.hears('Police Station' , (ctx) => {
  ctx.session.chosenPlace = ctx.message.text
  ctx.reply('please share your current location ' , Extra.markup((markup) => {
    return markup.resize()
    .keyboard([
      markup.locationRequestButton('Share your Location')
    ])
    .oneTime()
  }))
})

safePlacesScene.hears('Hospital' , (ctx) => {
  ctx.session.chosenPlace = ctx.message.text
  ctx.reply('please share your current location ' , Extra.markup((markup) => {
    return markup.resize()
    .keyboard([
      markup.locationRequestButton('Share your Location')
    ])
    .oneTime()
  }))
})

safePlacesScene.hears('Banks' , (ctx) => {
  ctx.session.chosenPlace = ctx.message.text
  ctx.reply('Which bank would you like to go to' , Markup
  .keyboard([
    ['Absa'],
    ['Capitec'],
    ['More Banks']
  ])
  .oneTime()
  .resize()
  .extra()
  )


})

safePlacesScene.hears('More Banks' , (ctx) => {
  ctx.reply('Here a list of more banks' , Markup
  .keyboard([
    ['FNB'],
    ['Standard Bank'], 
    ['Back']
  ])
  .oneTime()
  .resize()
  .extra())
})


safePlacesScene.hears('Absa' , (ctx) => {
  ctx.session.chosenBank = ctx.message.text
  ctx.reply('please share your current location ' , Extra.markup((markup) => {
    return markup.resize()
    .keyboard([
      markup.locationRequestButton('Share your Location')
    ])
    .oneTime()
  }))

})

safePlacesScene.hears('Capitec' , (ctx) => {
  ctx.session.chosenBank = ctx.message.text
  ctx.reply('please share your current location ' , Extra.markup((markup) => {
    return markup.resize()
    .keyboard([
      markup.locationRequestButton('Share your Location')
    ])
    .oneTime()
  }))

})

safePlacesScene.hears('FNB' , (ctx) => {
  ctx.session.chosenBank = ctx.message.text
  ctx.reply('please share your current location ' , Extra.markup((markup) => {
    return markup.resize()
    .keyboard([
      markup.locationRequestButton('Share your Location')
    ])
    .oneTime()
  }))

})

safePlacesScene.hears('Standard Bank' , (ctx) => {
  ctx.session.chosenBank = ctx.message.text
  ctx.reply('please share your current location ' , Extra.markup((markup) => {
    return markup.resize()
    .keyboard([
      markup.locationRequestButton('Share your Location')
    ])
    .oneTime()
  }))

})




// safePlacesScene.on('message' , (ctx) => {
//   ctx.session.chosenBank = ctx.message.text
//   ctx.reply('please share your current location ' , Extra.markup((markup) => {
//     return markup.resize()
//     .keyboard([
//       markup.locationRequestButton('Share your Location')
//     ])
//     .oneTime()
//   }))

// })

safePlacesScene.on('location' , (ctx) => {
  ctx.reply('an sms shall be sent with direction soon to your phone')
  ctx.scene.enter('mainMenuScene')
})

safePlacesScene.hears('Back' ,ctx => ctx.scene.enter('safePlacesScene'))
safePlacesScene.hears('menu' , ctx => ctx.scene.enter('mainMenuScene'))




module.exports = safePlacesScene
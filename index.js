const Telegraf = require('telegraf')
const axios = require('axios')
const telegramTypings = require("telegram-typings")
const Markup = require("telegraf/markup")
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const scene = require('telegraf/scenes/base')

const { leave } = Stage


const mainRegistrationScene = require("./scenes/mainRegistrationScene")
const registrationStepOneScene = require("./scenes/registrationStepOneScene")
const registrationStepTwoScene = require("./scenes/registrationStepTwoScene")
const registrationStepThreeScene = require("./scenes/registrationStepThreeScene")

const mainMenuScene = require("./scenes/mainMenuScene")
const sosScene = require("./scenes/sosScene")
const safePlacesScene = require("./scenes/safePlacesScene")
const panickButtonScene = require("./scenes/panicButtonScene")


const bot = new Telegraf("775813674:AAFw6I2tELxkiLa5cV7ev-IMF1vydW3fG5Y")

//create scene manager 
const stage = new Stage()
stage.command('cancel' , leave())

//scene registration - register all the scenes here 
stage.register(mainRegistrationScene)
stage.register(registrationStepOneScene)
stage.register(registrationStepTwoScene)
stage.register(registrationStepThreeScene)

stage.register(mainMenuScene)
stage.register(sosScene)
stage.register(safePlacesScene)
stage.register(panickButtonScene)



bot.use(session())
bot.use(stage.middleware())

//initiating the bot 

bot.start(function (ctx) {
  ctx.reply("Hi I am your friendly safety bot \n type 'Hi' or 'Hello' to get started or 'Cancel' to quit")
})
bot.hears([/hello(there)?/i , /hey(there)?/i , /hi(there)?/i] , function(ctx){
  ctx.reply("Hey there \t " + ctx.update.message.chat.first_name)
  ctx.scene.enter('mainRegistrationScene')
  // axios.get('http://69a4f030.ngrok.io/processor/v1/userDetails/' + ctx.chat.id)
  // .then(respone => {
  //   if(Response.data.exists === true){
  //     ctx.session.contact_number = response.data.msidn
  //     ctx.scene.enter('mainMenuScene')
  //   }else {
  //     ctx.scene.enter('mainRegistrationScene')
  //   }
  // })
})


bot.startPolling()
const axios = require('axios')

//add a newly registered user to the firebase db

function addUserDetails(ctx){
  let userId = {
    msidn: ctx.session.contact_number,
    telegram_id: ctx.update.message.chat.id,
    first_name: ctx.update.message.chat.first_name, 
    last_name: ctx.update.message.chat.last_name,
    imei:  ctx.session.imei,
    firstIceNumber: ctx.session.firstIceNumber ,
    secondIceNumber: ctx.session.secondIceNumber
  }
  console.log(userID)

  //posting data to the processor endpoint 
  // axios.post('http://69a4f030.ngrok.io/processor/v1/saveUserDetails', userID)
  // .then(function(response){
  //   console.log(response.data)
  // })
}

module.exports = {
  addUserDetails: addUserDetails
}
const request = require('request')

const forecast = (latitude,longitude,callback) => {
  const url= 'http://api.weatherstack.com/current?access_key=3c3097304e133aff069f676bfc1200d2&query='+latitude+','+longitude

  //Used Object property shorthand in request url property
  //Used Object destructuring in the anonymous function {body} which creates a variable named body
  //which we are accessing later in callback.
  request({url,json:true},(error,{body}) => {
    if(error){
        callback('Unable to connect to the server',undefined)
      }else if(body.error) {
        console.log('Unable to find location',undefined)
      }else{
        callback(undefined,{
          temp: body.current.temperature,
          feelslike: body.current.feelslike,
          weat_desc: body.current.weather_descriptions[0]})
      }
  })
}

module.exports = forecast

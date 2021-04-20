const request = require('request');


const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoicnl1emFraTc3NyIsImEiOiJja25oOXlyejcyaXUzMnhsY2c3cWpmb2hoIn0.6hLY9DPui6r0FjojU6Twcg&limit=1'
  //Used Object property shorthand in request url property
  //Used Object destructuring in the anonymous function {body} which creates a variable named body
  //which we are accessing later in callback.
  request({ url,json:true},(error, {body}) => {
    if(error){
      callback('Unable to connect to location services!',undefined)
    }else if(body.features.length === 0) {
      callback('Unable to find location. Try another search',undefined)
    }else{
      callback(undefined,{
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
      callback(undefined,{
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}



module.exports = geocode

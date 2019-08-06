const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const command = process.argv[2]
console.log(command)

// const url = 'https://api.darksky.net/forecast/f0daac9578589e2cd4ded22ceff26533/37.8267,-122.4233?units=us'

// request({url: url, json: true}, (error, response) => {
//     if(error){
//         console.log("Unable to connect to weather service")
//     }
//     else if (response.body.error){
//         console.log("Unable to find location")
//     }
//     else{
//         // console.log(response.body.currently)
//         // const data = JSON.parse(response.body) //data is parsed into json with object boolean
//         const {temperature, precipProbability} = response.body.currently
//         console.log(`It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`)
//         console.log("Summary: " + response.body.daily.data[0].summary)
//     }
    
// })

//geocoding 
// Address => api lat/long => weather

// const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmVpcmV5bm9zbyIsImEiOiJjanl4cHBmcGUwZXQzM2hxZWxianhycWdnIn0.PaCC5hDbkj6LrJ7tnkXH2A&limit=1'

// request({url: geocodingUrl, json:true}, (error,response) => {
//     if(error){
//         console.log("Unable to connect to location services")
//     }
//     else if (response.body.features.length === 0){
//         console.log("No matching results")
//     }
//     else{
//         console.log(response.body.features[0].center)
//     }    
// })

if(command){
  geocode(command, (error,{longitude, latitude, location}) => {
    if(error){
      return console.log(error)
    }
    console.log('Error', error)
    // console.log('Data', data)
    // const {longitude, latitude, location} = data
    forecast(longitude, latitude, (error, forecaseData) => {
      if(error){
        return console.log(error)
      }
      // console.log('Error', error)
      // console.log('Data', data)
      console.log(location)
      console.log(forecaseData)
    })
  })
}
else{
  console.log("Please enter location")
}


// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })
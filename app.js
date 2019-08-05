const request = require('request')

const url = 'https://api.darksky.net/forecast/f0daac9578589e2cd4ded22ceff26533/37.8267,-122.4233?units=us'

request({url: url, json: true}, (error, response) => {
    console.log(response.body.currently)
    // const data = JSON.parse(response.body) //data is parsed into json with object boolean
    const {temperature, precipProbability} = response.body.currently
    console.log(`It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`)
    console.log("Summary: " + response.body.daily.data[0].summary)
})

//geocoding 
// Address => api lat/long => weather

const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmVpcmV5bm9zbyIsImEiOiJjanl4cHBmcGUwZXQzM2hxZWxianhycWdnIn0.PaCC5hDbkj6LrJ7tnkXH2A&limit=1'

request({url: geocodingUrl, json:true}, (error,response) => {
    console.log(response.body.features[0].center)
})
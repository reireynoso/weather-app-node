const request = require('request')

const url = 'https://api.darksky.net/forecast/f0daac9578589e2cd4ded22ceff26533/37.8267,-122.4233'

request({url: url}, (error, response) => {
    // console.log(response)
    const data = JSON.parse(response.body)
    console.log(data.currently)
})
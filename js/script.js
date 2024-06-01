// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

async function weatherClicked() {
  try {
    //input
    let resultJSON = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
    )
    let jsonData = await resultJSON.json()
    console.log(jsonData)

    //process
    let weatherData = jsonData.weather[0]
    console.log(weatherData)
    let weatherText = weatherData.description
    console.log(weatherText)
    let weatherIconID = weatherData.icon
    console.log(weatherIconID)
    let weatherIconURL =
      "https://openweathermap.org/img/wn/" + weatherIconID + "@2x.png"
    console.log(weatherIconURL)

    // output
    document.getElementById("weather-icon").innerHTML =
      '<img src="' + weatherIconURL + '" alt="weather icon" width="250" />'
    document.getElementById("weather-info").innerHTML =
      "<p>" + weatherData.description + "</p>"
  } catch (error) {
    console.error(error)
  }
}

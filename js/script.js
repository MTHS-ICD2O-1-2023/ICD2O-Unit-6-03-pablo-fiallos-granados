// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function enterClicked() {

  // input

  let day = document.getElementById('day').value
  let age  = document.getElementById('age').value

  // process
  // output

  if ((day == "tuesday" || day == "thursday")|| (age > 12 && age < 21 )) {
    document.getElementById("user-info").innerHTML = "Your pricing is: student pricing"
  } else {
    document.getElementById("user-info").innerHTML = "Your pricing is: regular pricing"
  }
}
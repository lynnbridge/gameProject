var express = require('express');
var router = express.Router();
var score = 0;

function checkAnswers() {

  var objInput = document.getElementById("quest1");
  if (objInput.checkValidity() == true){
    score = score + 1;
  }
  objInput = document.getElementById("quest2");
    if (objInput.checkValidity() == true){
      score = score + 1;
    }
  objInput = document.getElementById("quest3");
    if (objInput.checkValidity() == true){
      score = score + 1;
    }
  objInput = document.getElementById("quest4");
    if (objInput.checkValidity() == true){
      score = score + 1;
    }
}

function calculateScore() {
  document.getElementById("total").innerHTML = "Total:"+ score;
}

module.exports = router;

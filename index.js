
function randomNumberGen1() {
    var randomNumber1 = Math.floor(Math.random() * 7);
    if (randomNumber1 === 1){
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
    } else if (randomNumber1 === 2){
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
    } else if (randomNumber1 === 3){
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
    } else if (randomNumber1 === 4){
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
    } else if (randomNumber1 === 5){
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
    } else if (randomNumber1 === 6){
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    }

    var randomNumber2 = Math.floor(Math.random() * 7);
    if (randomNumber2 === 1){
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
    } else if (randomNumber2 === 2){
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
    } else if (randomNumber2 === 3){
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
    } else if (randomNumber2=== 4){
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
    } else if (randomNumber2 === 5){
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
    } else if (randomNumber2 === 6){
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    }

    var element = document.querySelector("h2");
    
    if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆 ";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = " 🏆 Player 1 Wins!";
    } else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "It's equal!</br> Refresh again!🔄";
        element.remove();
    }
}


window.onload = randomNumberGen1();



/*var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomDiceSource = "images/" + randomNumber1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceSource2);*/
let firstcard = 10 ;
let secondcard = 8 ;
let sum = firstcard + secondcard ;
let age = 21
let hasBlackjack = false ;
let isAlive = true ;
let message = ""

let starbtn = document.getElementById('start');

starbtn.addEventListener('click',startgame());
function startgame(){
    if (sum <= 21){
        message = "Do you want to draw a new card? 🙂" ;
    }
    else if(sum === 21){
        message = "Wohoo! You've got Blackjack! 🥳" ;
        hasBlackjack = true ;
    }
    else {
        message = "You're out of the game! 😭" 
        isAlive = false ;
    }
}


// age limit

if(age < 21){
    console.log("You can not enter the club! 🙅‍♂️");
}
else{
    console.log("Welcome!! 😎 ");
}


// card sum 

let sum = 0 ;
let age = 21 ;
let cards = [] ; 
let hasBlackjack = false ;
let isAlive = false ;
let message = ""
let sumEl = document.getElementById("sum-el");
let startBtn = document.getElementById("start-btn");
let cardEl = document.getElementById("card-el");
let messageEl = document.getElementById("message-el");
let newBtn =  document.getElementById('new-btn')

startBtn.addEventListener('click',startGame);
newBtn.addEventListener('click',newCard);

function randomNumber(){
   let randomNumber = Math.floor(Math.random()*13 + 1)
   if(randomNumber > 10 ){
        return 10
   }
   else if(randomNumber === 1){
        return 11
   }
   else{
        return randomNumber
   }
}

function startGame(){
    if(isAlive === false){
        isAlive = true ;
        let firstcard = randomNumber()
        let secondcard = randomNumber()
        sum = firstcard + secondcard ;
        cards = [firstcard , secondcard]
        renderGame()
        startBtn.style.display = "none" ;
    }
}

function renderGame(){
    cardEl.textContent = "Card : "
    sumEl.textContent = "sum :" + sum ;
    for (let i = 0 ; i < cards.length ; i++){
        cardEl.textContent += cards[i] + " ";
    }
    if (sum < 21){
        message = "Do you want to draw a new card? " ;
    }
    else if(sum === 21){
        message = "Wohoo! You've got Blackjack! " ;
        hasBlackjack = true ;
    }
    else {
        message = "You're out of the game! " 
        isAlive = false ;
    }
    messageEl.textContent = message ;
}

function newCard(){
    if(isAlive === true && hasBlackjack === false ){
        let newCard = randomNumber()
        cards.push(newCard)
        sum = sum + newCard
        renderGame() ;
        if(isAlive == false ){
            newBtn.style.display = "none" ;
        }
    }
}





// age limit

if(age < 21){
    console.log("You can not enter the club!");
}
else{
    console.log("Welcome!!");
}


// card sum 

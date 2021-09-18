let playEl=document.getElementById("play-el")
let cardEl=document.getElementById("card-el")
let sumEl=document.getElementById("sum-el")
let startEl=document.getElementById("start-game")
let newGame=document.getElementById("new-game")
let cards=[]
let message=" "
let sum=0
let isAlive=false
let blackJack=false

let player={
    name:"Reshma",
    chip:145
}

playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chip




function getRandemCard(){
    let cardNumber=Math.floor(Math.random()*13)+1
    if (cardNumber===1){
        return 11
    }
    
    else if (cardNumber>10){
        return 10
    
   }
   else{
   return cardNumber}
}
   





function renderGame(){
   

    cardEl.textContent="cards:"
    for(let i=0;i<cards.length;i++){
    cardEl.textContent+=cards[i]+" "}
    sumEl.textContent=`sum:${sum}`

    if(sum<21){
        message="Do you want more cards?"
        blackJack=false
    }
    else if(sum===21){
        message="You won" 
        blackJack=true
    }
    else{
        message="You are logged out"
        isAlive=false
    }
    playEl.textContent=message
}

    
startEl.addEventListener("click",function(){
    let firstVariable=getRandemCard();
    let secondVariable=getRandemCard();
    cards=[firstVariable,secondVariable]
    sum=firstVariable+secondVariable;
    isAlive=true;
    renderGame();
})

newGame.addEventListener("click",function(){
    if (isAlive==true && blackJack==false){
        let card=getRandemCard();
        cards.push(card)
        sum+=card;
        renderGame()
        
    }
})
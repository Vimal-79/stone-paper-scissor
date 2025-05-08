const choice = document.getElementsByClassName("choice");
const msg = document.getElementById("msg");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const playerScore = document.querySelector("#player-score");
const botScore = document.querySelector("#bot-score");
const resetBtn = document.querySelector("#reset");


let botChoice;
let userChoice;

// stone == 0
// paper == 1
// scissor == 2

rock.addEventListener('click' , () => {
    userChoice = 0;
    botChoice =  Math.floor(Math.random()*3)
    declarerationOfWinner();
});

paper.addEventListener('click' , () => {
    userChoice = 1;
    botChoice =  Math.floor(Math.random()*3)
    declarerationOfWinner();
});

scissor.addEventListener('click' , () => {
    userChoice = 2;
    botChoice =  Math.floor(Math.random()*3)
    declarerationOfWinner();
});

resetBtn.addEventListener('click' , reset);


function declarerationOfWinner (){

    // user win condition

    if((userChoice == 0 && botChoice == 2) || (userChoice == 1 && botChoice == 0) || (userChoice == 2 && botChoice == 1) ){
        msg.classList.remove("hide");
        msg.classList.remove("msg-for-lose");
        msg.classList.remove("msg-for-draw");
        msg.classList.add("msg-for-win");
        msg.innerText = `You won the game`;
        playerScore.innerText = parseInt(playerScore.innerText)+ 1 ;
    }
    // user lose condition
    else if((userChoice == 0 && botChoice == 1) || (userChoice == 1 && botChoice == 2) || (userChoice == 2 && botChoice == 0) ){
        msg.classList.remove("hide");
        msg.classList.remove("msg-for-win");
        msg.classList.remove("msg-for-draw");
        msg.classList.add("msg-for-lose");
        msg.innerText = "You loss the game";
        botScore.innerText = parseInt(botScore.innerText) + 1 ;
    }
    // draw condition
    else if((userChoice == 0 && botChoice == 0) || (userChoice == 1 && botChoice == 1) || (userChoice == 2 && botChoice == 2) ){
        msg.classList.remove("hide");
        msg.classList.remove("msg-for-win");
        msg.classList.remove("msg-for-lose");
        msg.classList.add("msg-for-draw");
        msg.innerText = "The Game was a draw";
    }
}

function reset (){
    playerScore.innerText = 0 ;
    botScore.innerText = 0 ;
    msg.classList.remove("msg-for-win" , "msg-for-lose" , "msg-for-draw");
    msg.classList.add("hide");
}

let playerScore = 0;
let botScore = 0;

const msg = document.querySelector("#msg");
const player_score = document.querySelector("#player-score");
const bot_score = document.querySelector("#bot-score");
const newGameBtn = document.querySelector("#reset");

const choices = document.querySelectorAll(".choice");

// function for get choice from computer
function botPlay(choiceId){
    const botOptions = ["rock" , "paper" , "scissor"];
    let randomOption = Math.floor(Math.random()*3);
    const botChoice = botOptions[randomOption];
    const playerChoice = choiceId ;
    checkForWinner(botChoice , playerChoice);
}

// taking user input
choices.forEach((choice) => {
    choice.addEventListener('click' , () => {
        const choiceId =  choice.getAttribute("id")
        botPlay(choiceId);
    })
})

function checkForWinner(botChoice , playerChoice){
    // game draw condition
    if(botChoice === playerChoice){
        drawGame();
    }

    // player wining conditon 
    else if(botChoice === "rock"){
        if(playerChoice === "paper"){
            winGame(botChoice, playerChoice);
        }

        // player losing condition
        else if(playerChoice === "scissor"){
            lossGame(botChoice , playerChoice);
        }
    }

    // player wining condition
    else if(botChoice === "paper"){
        if(playerChoice === "scissor"){
            winGame(botChoice , playerChoice);
        }

        // player losing condition
        else if(playerChoice === "rock"){
            lossGame(botChoice , playerChoice);
        }
    }
}

function drawGame(){
    msg.innerText = `Game was a draw`;
    msg.classList.remove("hide" , "msg-for-win" , "msg-for-lose");
    msg.classList.add("msg-for-draw");
}

function winGame(botChoice , playerChoice){
    msg.innerText = `You won, ${playerChoice} beats ${botChoice}`;
    msg.classList.remove("hide" , "msg-for-lose" , "msg-for-draw");
    msg.classList.add("msg-for-win");
    playerScore += 1 ;
    player_score.innerText = playerScore;
}

function lossGame(botChoice , playerChoice){
    msg.innerText = `You lose, ${botChoice} beats ${playerChoice}`
    msg.classList.remove("hide" , "msg-for-win" , "msg-for-draw");
    msg.classList.add("msg-for-lose");
    botScore += 1;
    bot_score.innerText = botScore;
}

// new game button 

newGameBtn.addEventListener('click' , newGame)

function newGame(){
    bot_score.innerText = botScore = 0;
    player_score.innerText = playerScore = 0;
    msg.classList.add("hide");
}

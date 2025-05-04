const slots = document.querySelectorAll(".box");
const newGameBtn = document.querySelector("#new-btn");
const resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");

let turnPlayer1 = true;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6] 
];

slots.forEach((slot) => {
    slot.addEventListener("click" , () => {
        if(turnPlayer1){
            slot.innerText = "X";
            turnPlayer1 = false;
        }
        else{
            slot.textContent = "O";
            turnPlayer1 = true;
        }

        switch(slot.innerText){
            case "X" : slot.style.color = "green"; 
            break;
            default : slot.style.color = "purple";
        };
        
        slot.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for(pattern of winPattern){
        let val1 = slots[pattern[0]].innerText;
        let val2 = slots[pattern[1]].innerText;
        let val3 = slots[pattern[2]].innerText;

    if(val1 != "" && val2 != "" && val3 != ""){
        if(val1 === val2 && val2 === val3){
             showWinner(val1);
            
          }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation , The winner is ${winner}`;
    msg.classList.remove("hide");
    newGameBtn.classList.remove("hide");
    declareWinner();
}

const declareWinner = () => {
    for(box of slots){
        box.disabled = true;
    }
};

const reset = () => {
    for(box of slots){
        box.innerText = "";
        box.disabled = false;
        turnPlayer1 = true;
        msg.classList.add("hide");
        newGameBtn.classList.add("hide");
    }
};

resetBtn.addEventListener('click' , reset);
newGameBtn.addEventListener('click' , reset);
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawgame = () => {
    msg.innerText = "THE GAME WAS DRAW, PLAY AGAIN";
    msg.style.backgroundColor = "#081d31"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOSE, ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //Generate Computer choice
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        //Draw Game
        drawgame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

 // konsa bhi kaam karna ho to uske liye function ko bnaya jata hai -> mdoular way of programming
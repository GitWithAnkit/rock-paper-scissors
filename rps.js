let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreNew = document.querySelector("#user-score");
const compScoresNew = document.querySelector("#comp-score");
const restartBtn = document.querySelector("#restart-btn");

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScoreNew.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScoreNew.innextext
    }
    else{
        compScore++;
        compScoresNew.innerText=compScore;
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
    const compChoice = gencompChoice();

    if(userChoice===compChoice){
        console.log("It's a draw");
        msg.innerText="It's a draw";
        msg.style.backgroundColor="#081b31"
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper, scissor
            userWin = compChoice==="paper" ? false : true
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="scissor" ? false : true
        }
        else{
            userWin = compChoice==="rock" ? false : true
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const gencompChoice = () => {
    const options=["rock", "paper", "scissor"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})

const images = document.querySelectorAll(".choice img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        // Remove 'selected' from all first
        images.forEach(i => i.classList.remove("selected"));

        // Add 'selected' to the clicked image
        img.classList.add("selected");

        // Remove 'selected' after 1 second
        setTimeout(() => {
            img.classList.remove("selected");
        }, 150); // 1000 ms = 1 second
    });
});

restartBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScoreNew.innerText = userScore;
    compScoresNew.innerText = compScore;
    msg.innerText = "Game reset! Make your move.";
    msg.style.backgroundColor = "#081b31";

    // Remove any highlighted selections
    const allImages = document.querySelectorAll(".choice img");
    allImages.forEach(img => img.classList.remove("selected"));
});

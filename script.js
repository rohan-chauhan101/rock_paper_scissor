//code starts for rock,paper,scissors game

let userScore = 0;
let compScore = 0;

let choises = document.querySelectorAll(".choise");
let message = document.querySelector("#message");
let user_score= document.querySelector("#user-score");
let computer_score = document.querySelector("#comp-score");


// console.log(choises)

const genCompChoise = () => {
    let options = ["rock", "paper", "scissors"];
    let randIndx = Math.floor((Math.random())*3)
    return options[randIndx];
}

//compChoise = computer choise

displayWinner = (userWin, userChoise, compChoise) => {
    
    if(userWin){
        message.innerText = `You won! ${userChoise} beats ${compChoise}`;
        message.style.backgroundColor = "green";
        userScore++;
        user_score.innerText = userScore;
    }
    else{
        message.innerText = `You lose! ${compChoise} beats ${userChoise}`;
        message.style.backgroundColor = "red";
        compScore++;
        computer_score.innerText = compScore;
    }
}

const drawgame = () => {
    message,innerText = "game Draw! Play gain"
}

const game = (userChoise) => {
    let compChoise = genCompChoise();
    console.log(`user choise = ${userChoise}`);
    console.log(`user choise = ${compChoise}`);
    if(userChoise === compChoise){
        drawgame();
    }
    else{
        let userWin = true;
        if(userChoise === "rock"){
            userWin = compChoise === "paper"?false:true;
        }
        else if(userChoise === "paper"){
            userWin = compChoise === "scissors"? false : true;
        }
        else{
            userWin = compChoise === "rock"? false : true;
        }
        displayWinner(userWin,userChoise,compChoise);
    }
}



choises.forEach((choise) => {
    // console.log(choise);

    choise.addEventListener("click", () => {
        const userChoise = choise.getAttribute("id");
        // console.log(`${userChoise} was clicked`);
        game(userChoise);
    })
})




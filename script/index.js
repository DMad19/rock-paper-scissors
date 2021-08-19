//noting playerSelection,computerSelection
let playerSelection,computerSelection;

// Noting the player's score and computer's score 
let playerScore = 0 ,computerScore = 0;

//selecting all buttons
const buttons = document.querySelectorAll('.bttn');

//select-area manipulating
const select = document.querySelector('#select');

//reload button
const reload = document.querySelector(".restart");

//end music
var won_audio = new Audio('/rock-paper-scissors/Music/gta.mp3');
var lost_audio = new Audio('/rock-paper-scissors/Music/Mario_GameOver.mp3');

//getting score in the scoreboard
function Restart()
{
    playerScore = 0;
    computerScore = 0;
}

//disabling buttons after a win
let disabled = function(){   
    buttons.forEach((button)=>button.style.display = "none");
}
//computer selecting a option
let computerPlay = function(){
    let randomNum = Math.floor(Math.random()*1000);
    if(randomNum%3 == "0")
    {
        return "rock";
    }
    else if(randomNum%3 == "1")
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
};

//noting score in the scoreboard
let getScore = function(playerScore,computerScore)
{
    const Pscore = document.querySelector("#playerScore");
    Pscore.innerHTML = `<span>${playerScore}</span>`;
    const Cscore = document.querySelector("#computerScore");
    Cscore.innerHTML = `<span>${computerScore}</span>`
}
//Round of a game
let playRound = function()
{

    //computer selection over three options
    computerSelection = computerPlay().toLowerCase();

    if((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock"))
    {
        select.innerHTML = `Bot's ${computerSelection} defeated your ${playerSelection}</span>`
        computerScore++;
        getScore(playerScore,computerScore);
        if(computerScore ==5)
        {
            disabled();
            reload.setAttribute('style','visibility:visible');
            reload.addEventListener('click',()=>window.location.reload()); 
            select.innerHTML = "<span>Game over.You are defeated by Bot</span>";
            lost_audio.play();
        }
    }
    else if(playerSelection == computerSelection)
    {
        select.innerHTML = 'Tied';
    }
    else if((computerSelection == "rock" && playerSelection == "paper" ) || (computerSelection == "paper" && playerSelection == "scissors") ||(computerSelection == "scissors" && playerSelection == "rock"))
    {
        select.innerHTML = `your ${playerSelection} won over ${computerSelection}</span>`
        playerScore++;
        getScore(playerScore,computerScore);
        if(playerScore==5)
        {
            disabled();
            reload.setAttribute('style','visibility:visible');
            reload.addEventListener('click',()=>window.location.reload());
            select.innerHTML = "<span>Game won.Respect++</span>";
            won_audio.play();
            setTimeout(function(){won_audio.pause()},15000);
        }
        return playerScore;
    }
    else
    {
        console.log("wrong input");
    }


};

buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            playerSelection = button.value;
            playRound();
        });
});
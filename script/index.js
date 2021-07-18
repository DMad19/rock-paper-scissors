//player selecting a option
let playerPlay = function()
{
    let playerSelection = prompt("enter rock or paper or scissors");
    console.log(`${playerSelection.toLowerCase()} is your selection`);
    return playerSelection;
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

// Noting the player's score and computer's score 
let playerScore = 0 ,computerScore = 0;

//Round of a game
let playRound = function()
{

    //player selection over three options
    let playerSelection = playerPlay().toLowerCase();

    //computer selection over three options
    let computerSelection = computerPlay().toLowerCase();

    if((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock"))
    {
        console.log(`${computerSelection} is computer's selection`);
        console.log(`${computerSelection} won over ${playerSelection}. Mission Failed`)
        return ++computerScore;
    }
    else if(playerSelection == computerSelection)
    {
        console.log(`${computerSelection} is computer's selection`);
        console.log(`Tie.`);
    }
    else if((computerSelection == "rock" && playerSelection == "paper" ) || (computerSelection == "paper" && playerSelection == "scissors") ||(computerSelection == "scissors" && playerSelection == "rock"))
    {
        console.log(`${computerSelection} is computer's selection`);
        console.log(`${playerSelection} won over ${computerSelection}. Mission passed`);
        return ++playerScore;
    }
    else
    {
        console.log("wrong input");
    }


};

let game = function()
{
    while(!(playerScore>=5) && !(computerScore>=5) )
    {
        playRound();
        console.log(`score is ${playerScore}-${computerScore}`);
    }
    if(playerScore>computerScore)
    {
        console.log(`Game won . Respect++`);
    }
    else
    {
        console.log(`Game over . Respect--`)
    }
}
game();
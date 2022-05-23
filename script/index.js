let playerScore = 0
let ComputerScore = 0
const buttons = document.querySelectorAll('.choices>button')
const results = document.querySelector('.results')
const pscore = document.querySelector('.pscore')
const cscore = document.querySelector('.cscore')
const restart = document.querySelector('#restart')
const choices = document.querySelector('.choices')
var won_audio = new Audio('./Music/gta.mp3');
var lost_audio = new Audio('./Music/Mario_GameOver.mp3');
ComputerPlay = () => {
    let choice = Math.floor(Math.random()*3);
    console.log(choice)
    if(choice== 0)
    {
        return 'rock'
    }
    else if(choice == 1)
    {
        return 'paper'
    }
    else
    {
        return 'scissor'
    }
}
playRound = (PlayerSelection,ComputerSelection) => {
    if((PlayerSelection == 'rock' && ComputerSelection == 'scissor')||(PlayerSelection=='paper' && ComputerSelection=='rock') ||(PlayerSelection=='scissor' && ComputerSelection=='paper') )
    {
        ++playerScore
        return `You won,${PlayerSelection} defeated ${ComputerSelection}`
    }
    else if(PlayerSelection == ComputerSelection)
    {
        return `both choose ${PlayerSelection} and ${ComputerSelection} `
    }
    else
    {
        ++ComputerScore
        return `you lost!${ComputerSelection} won over your ${PlayerSelection}`
    }
}
const play = ()=>{
    buttons.forEach(button=>{
        button.addEventListener('click',(e)=>{
            ComputerSelection = ComputerPlay()
            console.log(e.target.textContent)
            console.log(playRound(e.target.alt,ComputerSelection))
            pscore.textContent = `YOU : ${playerScore}`
            cscore.textContent = `PC : ${ComputerScore}`
            if(playerScore==5)
            {
                const resultdiv = document.createElement('div')
                results.appendChild(resultdiv)
                resultdiv.textContent = `YOU WON`
                resultdiv.classList = 'resultdiv'
                choices.setAttribute('style','display:none')
                buttons.forEach(btn=>{
                    btn.disabled = true
                    restart.setAttribute('style','visibility:visible')
                    won_audio.play();
                    setTimeout(function(){won_audio.pause()},15000);
                })

            }
            else if(ComputerScore == 5)
            {
                const resultdiv = document.createElement('div')
                results.appendChild(resultdiv)
                resultdiv.textContent = `COMPUTER WON`
                resultdiv.classList = 'resultdiv'
                choices.setAttribute('style','display:none')
                buttons.forEach(btn=>{
                    btn.disabled = true
                    restart.setAttribute('style','visibility:visible')
                    lost_audio.play();
                    setTimeout(function(){lost_audio.pause()},15000);
                })
            }
        })
    })
}
play()
const doRestart = () =>{
    restart.addEventListener('click',()=>{
        window.location.reload()
    })
}
doRestart()
'use strict'

let ballDirectionx = null;
let ballDirectiony = null;
let ballPositionx = null;
let ballPositiony = null;
let limitRight = null;
let limitBottom = null;

let ball = {
    ballDom: null,
    ballPositionx : 100,
    ballPositiony : 100,
    ballDirectionx : 1,
    ballDirectiony: 1,
    speed: 10
}

let game = {
    IdEvent : null,
}

document.addEventListener("DOMContentLoaded", function() {   

    ball.ballDom = document.getElementById('ball');
    limitRight = window.innerWidth - ball.ballDom.clientWidth / 2 
    limitBottom = window.innerHeight - ball.ballDom.clientWidth / 2 
            
    requestAnimationFrame(animationBall)
})

document.addEventListener('click',()=>{
    console.log(game.IdEvent);

    if(game.IdEvent !== null) {
        console.log(game.IdEvent);
        cancelAnimationFrame(game.IdEvent)
        game.IdEvent = null;
        console.log(game.IdEvent);
    } else {
        requestAnimationFrame(animationBall);
    }
})

function animationBall () {  

    // ball.ballPositionx += ball.speed * ball.ballDirectionx
    ball.ballPositiony += ball.speed * ball.ballDirectiony
    // ball.ballDom.style.left = `${ball.ballPositionx}px`
    ball.ballDom.style.top = `${ball.ballPositiony}px`
    
    if (ball.ballPositionx <= 0 || ball.ballPositionx >= limitRight){
        ball.ballDirectionx *= -1;        
    }
    if (ball.ballPositiony <= 0 || ball.ballPositiony >= limitBottom){
        ball.ballDirectiony *= -1;            
    }
    game.IdEvent = requestAnimationFrame(animationBall);
    console.log(game.IdEvent);
}          

'use strict'

// Objet contenant les infos sur la balle
const ball = {
    domObject       : null,
    directionX      : 1,
    directionY      : 1,
    posX            : 100,
    posY            : 100,
    speed           : 6
};

// Objet contenant les infos sur la taille de l'écran
const screenLimit = {
    right: window.innerWidth,
    bottom: window.innerHeight
};


document.addEventListener('DOMContentLoaded',function(){

    // On récupère la balle
    ball.domObject = document.querySelector('#ball');

    requestAnimationFrame(animateBall);

});

function animateBall()
{
    // on demande que cette fonction soit executés au prochain rafraichissement
    requestAnimationFrame(animateBall);


    // On recalcule la limite droite et basse de l'écran (taille de l'écran moins la largeur de la balle) au cas où la fenête ai été redimentionnée
    screenLimit.right = window.innerWidth - (ball.domObject.clientWidth);
    screenLimit.bottom = window.innerHeight - (ball.domObject.clientHeight);

    // on modifie la position de la balle en y ajoutant 1 ou soustrayant 1 selon la direction sur X et Y
    ball.posX += ball.speed * ball.directionX;
    ball.posY += ball.speed * ball.directionY;

    // on modifie le style de l'objet du DOM left et top
    ball.domObject.style.left = `${ball.posX}px`;
    ball.domObject.style.top = `${ball.posY}px`;

    //si la balle atteind les limites droite ou gauche de l'écran
    if (ball.posX <= 0 || ball.posX >= screenLimit.right) {
        // On multiplie par -1 la direction pour l'inverser !
        ball.directionX*=-1;
    }
    if (ball.posY <= 0 || ball.posY >= screenLimit.bottom) {
        // On multiplie par -1 la direction pour l'inverser !
        ball.directionY *= -1;
    }
}
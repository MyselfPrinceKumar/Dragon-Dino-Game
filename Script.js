let score=0;
let cross=true;
gameoverSound=new Audio("gameover.mp3");
musicSound=new Audio("music.mp3");
musicSound.play();
document.onkeydown = function (e) {
    // keyCode of these ArrowUp keys =38
    // keyCode of these ArrowDown keys =40
    // keyCode of these ArrowLeft keys =37
    // keyCode of these ArrowRight keys =39
    console.log(e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('AnimateDino');
        setTimeout(() => {
            dino.classList.remove('AnimateDino');
        }, 500)
    }
    else if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left=dinoX+112+"px";
    }
    else if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left=(dinoX-112)+"px";
    }
}
setInterval(() => {
    dino = document.querySelector('.dino');
    dragon = document.querySelector('.dragon');
    gameOver = document.querySelector('.gameOver');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));
    // console.log(dx,dy,ox,oy);
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY);
    if (offsetX < 73 && offsetY < 54) {
        gameOver.innerHTML="Game Over- Reload To Play Again"
        dragon.classList.remove('dragonAni');
        gameoverSound.play();
        setTimeout(()=>{
            musicSound.pause();
            gameoverSound.pause();

        },1000)
    }
    else if(offsetX<145&&cross==true){
        score+=10;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000)
        setTimeout(()=>{
           let aniDur=parseFloat(window.getComputedStyle(dragon, null).getPropertyValue('animation-duration'));
           let newDur=aniDur-0.1;
            dragon.style.animationDuration=newDur+'s';
            console.log(newDur);
        },500)
    }
}, 10);
function updateScore(score){
    document.getElementById('scoreCont').innerHTML="Your Score: " + score;
}

let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorsBtn = document.querySelector('.scissors');
let allBtns = document.querySelectorAll('.btn');
let robotRock = document.querySelector('.robot-rock');
let robotPaper = document.querySelector('.robot-paper');
let robotScissors = document.querySelector('.robot-scissors');
let robotButtons = document.querySelectorAll(".robot-buttons");
let robotChoice;
let yourScore = document.querySelector('.your-points');
let robotScore = document.querySelector('.robot-points');
let yourPoints = 0;
let robotPoints = 0;
let message = document.querySelector('.replies');
let messageTxt = document.querySelector('.message');
let messageDismiss = document.querySelector('.dismiss');


//rockClick()
function rockClick(){
    paperBtn.style.display = "none";
    scissorsBtn.style.display = "none";
    rockBtn.style.transform = "translateY(-220px)";
    rockBtn.style.cursor = "auto";
    rockBtn.removeAttribute('onclick');
    rockBtn.removeAttribute('onmouseover');
    rockBtn.removeAttribute('onmouseout');

    robotChoice = Math.floor(Math.random() * 3) + 1;

    if (robotChoice === 1){
        robotButtons.forEach(btn => {
            btn.style.display = "flex";
        });
        robotPaper.style.display = "none";
        robotScissors.style.display = "none";

        robotRock.style.transform = "translateY(140px)";

        yourPoints += 1;
        robotPoints += 1;
        yourScore.textContent = yourPoints;
        robotScore.textContent = robotPoints;

        if (yourPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You won!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else if (robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You lost!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        }
        else if (yourPoints == 10 && robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>Draw!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else{
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "Draw!";
                messageTxt.style.fontSize = "2rem";
            }, 800);
        }
    } 
    else if (robotChoice === 2){
        robotButtons.forEach(btn => {
            btn.style.display = "flex";
        });
        robotRock.style.display = "none";
        robotScissors.style.display = "none";

        robotPaper.style.transform = "translateY(140px)";

        yourPoints += 0;
        robotPoints += 1;
        yourScore.textContent = yourPoints;
        robotScore.textContent = robotPoints;

        if (yourPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You won!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else if (robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You lost!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        }
        else if (yourPoints == 10 && robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>Draw!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else{
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "You lost!";
                messageTxt.style.fontSize = "2rem";
            }, 800);
        }
    }
    else if (robotChoice === 3){
        robotButtons.forEach(btn => {
            btn.style.display = "flex";
        });
        robotPaper.style.display = "none";
        robotRock.style.display = "none";

        robotScissors.style.transform = "translateY(140px)";

        yourPoints += 1;
        robotPoints += 0;
        yourScore.textContent = yourPoints;
        robotScore.textContent = robotPoints;

        if (yourPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You won!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else if (robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You lost!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        }
        else if (yourPoints == 10 && robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>Draw!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else{
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "You won!";
                messageTxt.style.fontSize = "2rem";
            }, 800);
        }
    }
}
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////



//paperClick()
function paperClick(){
    rockBtn.style.display = "none";
    scissorsBtn.style.display = "none";
    paperBtn.style.transform = "translateY(-220px)";
    paperBtn.style.cursor = "auto";
    paperBtn.removeAttribute('onclick');
    paperBtn.removeAttribute('onmouseover');
    paperBtn.removeAttribute('onmouseout');

    robotChoice = Math.floor(Math.random() * 3) + 1;

    if (robotChoice === 1){
        robotButtons.forEach(btn => {
            btn.style.display = "flex";
        });
        robotPaper.style.display = "none";
        robotScissors.style.display = "none";

        robotRock.style.transform = "translateY(140px)";

        yourPoints += 1;
        robotPoints += 0;
        yourScore.textContent = yourPoints;
        robotScore.textContent = robotPoints;

        if (yourPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You won!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else if (robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You lost!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        }
        else if (yourPoints == 10 && robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>Draw!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else{
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "You won!";
                messageTxt.style.fontSize = "2rem";
            }, 800);
        }
    } 
    else if (robotChoice === 2){
        robotButtons.forEach(btn => {
            btn.style.display = "flex";
        });
        robotRock.style.display = "none";
        robotScissors.style.display = "none";

        robotPaper.style.transform = "translateY(140px)";

        yourPoints += 1;
        robotPoints += 1;
        yourScore.textContent = yourPoints;
        robotScore.textContent = robotPoints;

        if (yourPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You won!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else if (robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You lost!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        }
        else if (yourPoints == 10 && robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>Draw!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else{
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "Draw!";
                messageTxt.style.fontSize = "2rem";
            }, 800);
        }
    }
    else if (robotChoice === 3){
        robotButtons.forEach(btn => {
            btn.style.display = "flex";
        });
        robotPaper.style.display = "none";
        robotRock.style.display = "none";

        robotScissors.style.transform = "translateY(140px)";

        yourPoints += 0;
        robotPoints += 1;
        yourScore.textContent = yourPoints;
        robotScore.textContent = robotPoints;

        if (yourPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You won!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else if (robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You lost!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        }
        else if (yourPoints == 10 && robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>Draw!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else{
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "You lost!";
                messageTxt.style.fontSize = "2rem";
            }, 800);
        }
    }
}
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////



//scissorsClick()
function scissorsClick(){
    rockBtn.style.display = "none";
    paperBtn.style.display = "none";
    scissorsBtn.style.transform = "translateY(-220px)";
    scissorsBtn.style.cursor = "auto";
    scissorsBtn.removeAttribute('onclick');
    scissorsBtn.removeAttribute('onmouseover');
    scissorsBtn.removeAttribute('onmouseout');

    robotChoice = Math.floor(Math.random() * 3) + 1;

    if (robotChoice === 1){
        robotButtons.forEach(btn => {
            btn.style.display = "flex";
        });
        robotPaper.style.display = "none";
        robotScissors.style.display = "none";

        robotRock.style.transform = "translateY(140px)";

        yourPoints += 0;
        robotPoints += 1;
        yourScore.textContent = yourPoints;
        robotScore.textContent = robotPoints;

        if (yourPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You won!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else if (robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You lost!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        }
        else if (yourPoints == 10 && robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>Draw!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else{
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "You lost!";
                messageTxt.style.fontSize = "2rem";
            }, 800);
        }
    } 
    else if (robotChoice === 2){
        robotButtons.forEach(btn => {
            btn.style.display = "flex";
        });
        robotRock.style.display = "none";
        robotScissors.style.display = "none";

        robotPaper.style.transform = "translateY(140px)";

        yourPoints += 1;
        robotPoints += 0;
        yourScore.textContent = yourPoints;
        robotScore.textContent = robotPoints;

        if (yourPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You won!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else if (robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You lost!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        }
        else if (yourPoints == 10 && robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>Draw!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else{
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "You won!";
                messageTxt.style.fontSize = "2rem";
            }, 800);
        }
    }
    else if (robotChoice === 3){
        robotButtons.forEach(btn => {
            btn.style.display = "flex";
        });
        robotPaper.style.display = "none";
        robotRock.style.display = "none";

        robotScissors.style.transform = "translateY(140px)";

        yourPoints += 1;
        robotPoints += 1;
        yourScore.textContent = yourPoints;
        robotScore.textContent = robotPoints;

        if (yourPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You won!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to restart)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else if (robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>You lost!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to WRONG)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        }
        else if (yourPoints == 10 && robotPoints == 10){
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "The game ended!<br>Draw!";
                messageDismiss.innerHTML = "(click/tap on this <br> message to WRONG)";
                messageTxt.style.fontSize = "1.2rem";
            }, 800);
        } 
        else{
            setTimeout(function() {
                message.style.display = "grid";
                messageTxt.innerHTML = "Draw!";
                messageTxt.style.fontSize = "2rem";
            }, 800);
        }
    }
}
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////



//zooming
window.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });

window.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === '-') {
        event.preventDefault();
    }
});

window.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.keyCode === 187) {
        event.preventDefault();
    }
}); 


//message dismiss
function messageClick(){
    if (messageTxt.innerHTML == "The game ended!<br>You won!" || messageTxt.innerHTML == "The game ended!<br>You lost!" || messageTxt.innerHTML == "The game ended!<br>Draw!"){
        message.style.display = "none";

        paperBtn.style.display = "flex";
        scissorsBtn.style.display = "flex";
        rockBtn.style.display = "flex";
        rockBtn.style.transition = "0s";
        rockBtn.style.transform = "translateY(0px)";
        scissorsBtn.style.transition = "0s";
        scissorsBtn.style.transform = "translateY(0px)";
        paperBtn.style.transition = "0s";
        paperBtn.style.transform = "translateY(0px)";
    
        robotPaper.style.display = "flex";
        robotScissors.style.display = "flex";
        robotRock.style.display = "flex";
        robotRock.style.transition = "0s";
        robotRock.style.transform = "translateY(0px)";
        robotScissors.style.transition = "0s";
        robotScissors.style.transform = "translateY(0px)";
        robotPaper.style.transition = "0s";
        robotPaper.style.transform = "translateY(0px)";

        rockBtn.setAttribute('onclick', 'rockClick()');
        rockBtn.setAttribute('onmouseover', 'rockOver()');
        rockBtn.setAttribute('onmouseout', 'rockOut()');
        rockBtn.style.cursor = "pointer";
        paperBtn.setAttribute('onclick', 'paperClick()');
        paperBtn.setAttribute('onmouseover', 'paperOver()');
        paperBtn.setAttribute('onmouseout', 'paperOut()');
        paperBtn.style.cursor = "pointer";
        scissorsBtn.setAttribute('onclick', 'scissorsClick()');
        scissorsBtn.setAttribute('onmouseover', 'scissorsOver()');
        scissorsBtn.setAttribute('onmouseout', 'scissorsOut()');
        scissorsBtn.style.cursor = "pointer";

        yourPoints = 0;
        robotPoints = 0;
        yourScore.textContent = yourPoints;
        robotScore.textContent = robotPoints;
        messageDismiss.innerHTML = "(click/tap on this <br> message to continue)";

        requestAnimationFrame(function() {
            rockBtn.style.transition = "0.5s";
            paperBtn.style.transition = "0.5s";
            scissorsBtn.style.transition = "0.5s";
            robotRock.style.transition = "0.5s";
            robotPaper.style.transition = "0.5s";
            robotScissors.style.transition = "0.5s";
        });
    }
    else{
        message.style.display = "none";

        paperBtn.style.display = "flex";
        scissorsBtn.style.display = "flex";
        rockBtn.style.display = "flex";
        rockBtn.style.transition = "0s";
        rockBtn.style.transform = "translateY(0px)";
        scissorsBtn.style.transition = "0s";
        scissorsBtn.style.transform = "translateY(0px)";
        paperBtn.style.transition = "0s";
        paperBtn.style.transform = "translateY(0px)";
    
        robotPaper.style.display = "flex";
        robotScissors.style.display = "flex";
        robotRock.style.display = "flex";
        robotRock.style.transition = "0s";
        robotRock.style.transform = "translateY(0px)";
        robotScissors.style.transition = "0s";
        robotScissors.style.transform = "translateY(0px)";
        robotPaper.style.transition = "0s";
        robotPaper.style.transform = "translateY(0px)";

        rockBtn.setAttribute('onclick', 'rockClick()');
        rockBtn.setAttribute('onmouseover', 'rockOver()');
        rockBtn.setAttribute('onmouseout', 'rockOut()');
        rockBtn.style.cursor = "pointer";
        paperBtn.setAttribute('onclick', 'paperClick()');
        paperBtn.setAttribute('onmouseover', 'paperOver()');
        paperBtn.setAttribute('onmouseout', 'paperOut()');
        paperBtn.style.cursor = "pointer";
        scissorsBtn.setAttribute('onclick', 'scissorsClick()');
        scissorsBtn.setAttribute('onmouseover', 'scissorsOver()');
        scissorsBtn.setAttribute('onmouseout', 'scissorsOut()');
        scissorsBtn.style.cursor = "pointer";

        requestAnimationFrame(function() {
            rockBtn.style.transition = "0.5s";
            paperBtn.style.transition = "0.5s";
            scissorsBtn.style.transition = "0.5s";
            robotRock.style.transition = "0.5s";
            robotPaper.style.transition = "0.5s";
            robotScissors.style.transition = "0.5s";
        });
    }
}


function rockOver(){
    rockBtn.style.transform = "scale(1.2)";
}

function rockOut(){
    rockBtn.style.transform = "scale(1)";
}

function paperOver(){
    paperBtn.style.transform = "scale(1.2)";
}

function paperOut(){
    paperBtn.style.transform = "scale(1)";
}

function scissorsOver(){
    scissorsBtn.style.transform = "scale(1.2)";
}

function scissorsOut(){
    scissorsBtn.style.transform = "scale(1)";
}
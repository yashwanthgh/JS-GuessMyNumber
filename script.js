'use strict';

//Refactoring our code

let score = 20;
const secretScore = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

displayScore(score);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number Entered');
  } else if (secretScore === guess) {
    displayMessage('Correct Answer');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretScore;
    console.log(secretScore);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (secretScore !== guess) {
    score--;
    displayScore(score);
    if (score > 1) {
      displayMessage(
        guess > secretScore ? 'Number is Too High' : 'Number is Too Low'
      );
    } else {
      displayMessage('Game Over');
      displayScore(score);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.score').textContent = score;
  secreatNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessig...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

/*
//selecting the class by typing douc.querysel and .mess/ to access text 
//type .textContent
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct number";

document.querySelector(".score").textContent = 50;
document.querySelector(".number").textContent = 21;

//we use .value because its a input thing
console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 25;
*/
//=============================================================================

//Using random to get random number btween 1 to 20
//to eliminate decimals use math.trunc
//its showing inside the guess my number box

/*
let secreatNum = Math.trunc((Math.random()*20)+1);



//I have to decrease the score every time the guess is wrong so 
//creating a saperate veriable for it
// we have to decrease it so let

let score = 20;

let highScore = 0;

//.check is class in html 
//.add event listner it records the event happening
// that is click event 
//if i click that has to perform one function which is to show the 
//value which is inside that class
//am simply console loging it

document.querySelector(".check").addEventListener("click", function(){

    //Am converting string to number so Number
    //input giving in the number box
    const guess = Number(document.querySelector(".guess").value);

    //if user dont enter any number then it has to show no number entred 

    if(!guess){
        document.querySelector(".message").textContent = "No Number entered";

    } else if(secreatNum === guess){

        //in the message place am printing correct if random num and guess num are same
        document.querySelector(".message").textContent = "Correct answer";

        //display the number after winning the game

        document.querySelector(".number").textContent = secreatNum;

        //When player wins we should change the color to green and display
        //secrete number
        //i need to change entire color of the body so i selected body and changed 
        //its color
        
        document.querySelector("body").style.backgroundColor = '#60b347';

        //if the guess is correct then the width of number should get wider

        document.querySelector(".number").style.width = '30rem';

        //to store the high score
        if(score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

    //if the number is greater than secret number then

    } else if(guess>secreatNum){
 
        //these should only exicute if score is > 1 

        if(score>1){

            document.querySelector(".message").textContent = "Number is too high";
        
            //everytime this exicutes score should decrease by 1
            score--;
            document.querySelector(".score").textContent = score;
        
        } else {
        
                document.querySelector(".message").textContent = "Game Over";
                document.querySelector(".score").textContent = 0;
        }

        //if guess is too high 

    } else if(guess<secreatNum){

        //these should only exicute if score is > 1 

        if(score>1){

            document.querySelector(".message").textContent = "Number is too low";
        
            //everytime this exicutes score should decrease by 1
            score--;
            document.querySelector(".score").textContent = score;
        
        } else {
        
                document.querySelector(".message").textContent = "Game Over";
                document.querySelector(".score").textContent = 0;
        }
    }

});

document.querySelector(".again").addEventListener("click" , function(){

    //background color
    document.querySelector("body").style.backgroundColor = "#222";

    //width of secret number
    document.querySelector(".number").style.width = "15rem";

    //Score 20
    score = 20;
    document.querySelector(".score").textContent = score;

    //again creating the random to secret number
    secreatNum = Math.trunc((Math.random()*20)+1);

    //re creating the message 
    document.querySelector(".message").textContent = "Start guessig...";
    
    //changing the .number to ?
    document.querySelector(".number").textContent = "?";

    //because its a input so .value
    document.querySelector(".guess").value = "";

   // document.querySelector(".highscore").textContent = highScore;

});
*/

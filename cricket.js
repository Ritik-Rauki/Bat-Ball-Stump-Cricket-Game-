let scoreStr = localStorage.getItem('score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
  score = scoreStr ? JSON.parse(scoreStr) : {
    won:0,
    lost:0,
    tie:0,
    }
  score.displayScore = function(){
      return `won : ${score.won},  lost : ${score.lost}, tie : ${score.tie}`;
    }
  }
  function computerChoice() {
    let randomNumber = Math.random()*3;
    if(randomNumber>0 && randomNumber<=1){
      return 'Bat';
    }
    else if(randomNumber>1 && randomNumber<=2){
      return 'Ball';
    }
    else{
      return'Stump';
    }
  }

  function getResult(userMove,computerMove) {
    if(userMove==='Bat'){
      if(computerMove==='Ball'){
        score.won++;
        return 'You won';
      }
      else if(computerMove==='Bat'){
        score.tie++;
        return `it's tie`;
      }
      else if(computerMove==='Stump'){
        score.lost++;
        return 'Computer has won';
      }
    }
    else if (userMove==='Ball') {
      if(computerMove==='Ball'){
        score.tie++;
        return `it's tie`;
      }
      else if(computerMove==='Bat'){
        score.lost++;
        return 'Computer has won';
      }
      else if(computerMove==='Stump'){
        score.won++;
        return 'You won';
      }
    }
    else if (userMove==='Stump') {
      if(computerMove==='Ball'){
        score.lost++;
        return 'Computer has won';
      }
      else if(computerMove==='Bat'){
        score.won++;
        return 'You won';
      }
      else if(computerMove==='Stump'){
        score.tie++;
        return `it's tie`;
      }
    }
  }
  
  function showResult(userMove,randomChoice,result) {
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('#user-move').innerText = `Your choice => ${userMove}.`;
    document.querySelector('#computer-move').innerText = `Computer choice =>  ${randomChoice}.`;
    document.querySelector('#result').innerText = `Result => ${result}`;
    document.querySelector('#score').innerText = `Total Score => ${score.displayScore()}`;
  }
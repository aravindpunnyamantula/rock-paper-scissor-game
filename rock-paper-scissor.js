let  score= {
  Wins: 0,
  Ties: 0,
  Loses: 0
}
let savedScore = JSON.parse(localStorage.getItem('score'));
if(savedScore){
score = savedScore;
}
updateScoreElement();
function updateScoreElement() {

document.querySelector('.js-score')
.innerHTML = `Wins: ${score.Wins}, Loses: ${score.Loses}, Ties: ${score.Ties}`;

//Allocating badges
if(score.Wins === 5){
  alert(`You Won Rock Badge`);
  let badge =   `<img src="images/rockBadge.jpg" alt="Rock" class="b-img">`
  document.querySelector('.text-badge').innerHTML = 'You Won Rock badge';
  document.querySelector('.badge-instuctions').innerHTML = '5 more Wins to win a Paper Badge';
  document.querySelector('.badges').innerHTML = badge;
  
}else if(score.Wins === 10){
  alert('You won Paper Badge');
  badge = `<img src="images/paperBadge.jpg" alt="Rock" class="b-img">`;
  document.querySelector('.text-badge').innerHTML = 'You Won Paper badge';
  document.querySelector('.badge-instuctions').innerHTML = '15 more Wins to win a Scissor Badge';
  document.querySelector('.badges').innerHTML = badge;
}
else if(score.Wins === 25){
  alert('You Won Scissor Badge');
  badge = `<img src="images/scissorBadge.jpg" alt="Rock" class="b-img">`
  document.querySelector('.badges').innerHTML = badge;
}
}





function playGame(playerMove)
{
const computerMove = pickComputerMove();
let result = '';
if(playerMove === 'scissor'){

if(computerMove === 'Rock')
{
  result = 'You Lose';
}
else if(computerMove === 'Paper')
{
  result = 'You Win';
}
else if(computerMove === 'Scissor')
{
result = 'Tie';
}

}


if (playerMove === 'Paper'){
if(computerMove === 'Rock')
{
  result = 'You Win';
}
else if(computerMove === 'Paper')
{
  result = 'Tie';
}
else if(computerMove === 'Scissor')
{
result = 'You Lose';
}

}

if(playerMove === 'Rock'){
if(computerMove === 'Rock')
{
  result = 'Tie';
}
else if(computerMove === 'Paper')
{
  result = 'You Win';
}
else if(computerMove === 'Scissor')
{
result = 'You Lose';
}

}

//to calucate the number of wins and loses and ties
if(result === 'You Win'){
score.Wins += 1;

}else if(result === 'You Lose'){
score.Loses += 1;
}
else if(result === 'Tie'){
score.Ties += 1;
}
//local storage only supports Strings
localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-moves')
.innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer.`;

document.querySelector('.js-result').innerHTML = `${result}`;

}
function resetScore() {
score = {
Wins: 0,
Loses: 0,
Ties: 0
};

updateScoreElement();
localStorage.removeItem('score');

}

function pickComputerMove(){
let computerMove = '';
const randomNum = Math.random();

if (randomNum >=0 && randomNum <= 1/3)
{
computerMove = 'Rock';
}
else if(randomNum >= 1/3 && randomNum <= 2/3)
{
computerMove = 'Paper';
}
else if(randomNum >= 2/3 && randomNum <=1)
{
computerMove = 'scissor';
}

return computerMove;
}



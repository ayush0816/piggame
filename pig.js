'use script';


const playerBack0 = document.querySelector('.player--0');
const playerBack1 = document.querySelector('.player--1');

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
// const totalScore = document.querySelector('.current-score');
score0.textContent = 0;
score1.textContent = 0;


const dice = document.querySelector('.dice');
dice.classList.add('hidden');

// const secretNo = Math.trunc(Math.random() * 6) + 1;
let Score = 0;
let active = 0;
let playing = true;
let holdScore = [0, 0];
btnRoll.addEventListener('click', function() {

    if (playing) {
        const secretNo = Math.trunc(Math.random() * 6) + 1;

        dice.classList.remove('hidden');
        dice.src = `dice-${secretNo}.png`;

        if (secretNo !== 1) {
            Score += secretNo;
            // currentScore0.textContent = Score;
            document.getElementById(`current--${active}`).textContent = Score;

        } else {
            document.getElementById(`current--${active}`).textContent = 0;
            active = active === 0 ? 1 : 0;
            Score = 0;
            playerBack0.classList.toggle('player--active');
            playerBack1.classList.toggle('player--active');

        }
    }
});
btnHold.addEventListener('click', function() {
    if (playing) {
        holdScore[active] += Score;
        document.getElementById(`score--${active}`).textContent = holdScore[active];
        document.getElementById(`current--${active}`).textContent = 0;
        Score = 0;
        if (holdScore[active] >= 20) {
            playing = false;
            dice.classList.add('hidden');
            document.querySelector(`.player--${active}`).classList.add('player--winner');
            document.querySelector(`.player--${active}`).classList.remove('player--active');
        } else {
            active = active === 0 ? 1 : 0;
            playerBack0.classList.toggle('player--active');
            playerBack1.classList.toggle('player--active');
        }
    }
});
btnNew.addEventListener('click', function() {

    Score = 0;
    active = 0;
    playing = true;
    holdScore = [0, 0];

    score0.textContent = 0;
    score1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;

    dice.classList.add('hidden');
    playerBack0.classList.remove('player--winner');
    playerBack1.classList.remove('player--winner');
    playerBack0.classList.add('player--active');
    playerBack1.classList.remove('player--active');

});
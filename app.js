window.addEventListener('load', function() {

//Create suit arrays

const clubs = [2,3,4,5,6,7,8,9,10,11,12,13,14]
const diamonds = [2,3,4,5,6,7,8,9,10,11,12,13,14]
const spades = [2,3,4,5,6,7,8,9,10,11,12,13,14]
const hearts = [2,3,4,5,6,7,8,9,10,11,12,13,14]

// Assign images to arrays

clubs[0] = '<img src="./images/1.png" class="cardsOff" alt="card face up" data-id="2">';
clubs[1] = '<img src="./images/2.png" class="cardsOff" alt="card face up" data-id="3">';
clubs[2] = '<img src="./images/3.png" class="cardsOff" alt="card face up" data-id="4">';
clubs[3] = '<img src="./images/4.png" class="cardsOff" alt="card face up" data-id="5">';
clubs[4] = '<img src="./images/5.png" class="cardsOff" alt="card face up" data-id="6">';
clubs[5] = '<img src="./images/6.png" class="cardsOff" alt="card face up" data-id="7">';
clubs[6] = '<img src="./images/7.png" class="cardsOff" alt="card face up" data-id="8">';
clubs[7] = '<img src="./images/8.png" class="cardsOff" alt="card face up" data-id="9">';
clubs[8] = '<img src="./images/9.png" class="cardsOff" alt="card face up" data-id="10">';
clubs[9] = '<img src="./images/10.png" class="cardsOff" alt="card face up" data-id="11">';
clubs[10] = '<img src="./images/11.png" class="cardsOff" alt="card face up" data-id="12">';
clubs[11] = '<img src="./images/12.png" class="cardsOff" alt="card face up" data-id="13">';
clubs[12] = '<img src="./images/13.png" class="cardsOff" alt="card face up" data-id="14">';

diamonds[0] = '<img src="./images/14.png" class="cardsOff" alt="card face up" data-id="2">';
diamonds[1] = '<img src="./images/15.png" class="cardsOff" alt="card face up" data-id="3">';
diamonds[2] = '<img src="./images/16.png" class="cardsOff" alt="card face up" data-id="4">';
diamonds[3] = '<img src="./images/17.png" class="cardsOff" alt="card face up" data-id="5">';
diamonds[4] = '<img src="./images/18.png" class="cardsOff" alt="card face up" data-id="6">';
diamonds[5] = '<img src="./images/19.png" class="cardsOff" alt="card face up" data-id="7">';
diamonds[6] = '<img src="./images/20.png" class="cardsOff" alt="card face up" data-id="8">';
diamonds[7] = '<img src="./images/21.png" class="cardsOff" alt="card face up" data-id="9">';
diamonds[8] = '<img src="./images/22.png" class="cardsOff" alt="card face up" data-id="10">';
diamonds[9] = '<img src="./images/23.png" class="cardsOff" alt="card face up" data-id="11">';
diamonds[10] = '<img src="./images/24.png" class="cardsOff" alt="card face up" data-id="12">';
diamonds[11] = '<img src="./images/25.png" class="cardsOff" alt="card face up" data-id="13">';
diamonds[12] = '<img src="./images/26.png" class="cardsOff" alt="card face up" data-id="14">';

spades[0] = '<img src="./images/27.png" class="cardsOff" alt="card face up" data-id="2">';
spades[1] = '<img src="./images/28.png" class="cardsOff" alt="card face up" data-id="3">';
spades[2] = '<img src="./images/29.png" class="cardsOff" alt="card face up" data-id="4">';
spades[3] = '<img src="./images/30.png" class="cardsOff" alt="card face up" data-id="5">';
spades[4] = '<img src="./images/31.png" class="cardsOff" alt="card face up" data-id="6">';
spades[5] = '<img src="./images/32.png" class="cardsOff" alt="card face up" data-id="7">';
spades[6] = '<img src="./images/33.png" class="cardsOff" alt="card face up" data-id="8">';
spades[7] = '<img src="./images/34.png" class="cardsOff" alt="card face up" data-id="9">';
spades[8] = '<img src="./images/35.png" class="cardsOff" alt="card face up" data-id="10">';
spades[9] = '<img src="./images/36.png" class="cardsOff" alt="card face up" data-id="11">';
spades[10] = '<img src="./images/37.png" class="cardsOff" alt="card face up" data-id="12">';
spades[11] = '<img src="./images/38.png" class="cardsOff" alt="card face up" data-id="13">';
spades[12] = '<img src="./images/39.png" class="cardsOff" alt="card face up" data-id="14">';

hearts[0] = '<img src="./images/40.png" class="cardsOff" alt="card face up" data-id="2">';
hearts[1] = '<img src="./images/41.png" class="cardsOff" alt="card face up" data-id="3">';
hearts[2] = '<img src="./images/42.png" class="cardsOff" alt="card face up" data-id="4">';
hearts[3] = '<img src="./images/43.png" class="cardsOff" alt="card face up" data-id="5">';
hearts[4] = '<img src="./images/44.png" class="cardsOff" alt="card face up" data-id="6">';
hearts[5] = '<img src="./images/45.png" class="cardsOff" alt="card face up" data-id="7">';
hearts[6] = '<img src="./images/46.png" class="cardsOff" alt="card face up" data-id="8">';
hearts[7] = '<img src="./images/47.png" class="cardsOff" alt="card face up" data-id="9">';
hearts[8] = '<img src="./images/48.png" class="cardsOff" alt="card face up" data-id="10">';
hearts[9] = '<img src="./images/49.png" class="cardsOff" alt="card face up" data-id="11">';
hearts[10] = '<img src="./images/50.png" class="cardsOff" alt="card face up" data-id="12">';
hearts[11] = '<img src="./images/51.png" class="cardsOff" alt="card face up" data-id="13">';
hearts[12] = '<img src="./images/52.png" class="cardsOff" alt="card face up" data-id="14">';


// Combine arrays to make one array with all suits
//
const suits = clubs.concat(spades, diamonds, hearts);


// Display cards on page

const board = document.querySelector(".board");

const displayCards = () => {
   suits.forEach(card => {
      board.innerHTML +=
      `<div class="card"><img src="./images/red_back.png" class="cards" alt="card face down"">${card}</div>`;
  	});
	};

displayCards();


// Turn cards over

const card = document.querySelectorAll('.card')

card.forEach((item) => {
	item.addEventListener('click', function flip() {
      item.classList.add('active')

			const flippedCards = document.querySelectorAll('.active img.cardsOff');
			const cardValues = [];

			flippedCards.forEach((flippedCard) => {
			    const collectCardValue =  flippedCard.getAttribute('data-id');
					cardValues.push(collectCardValue);


      // Only allow two cards to be selected at once and check to see if matched
      // Remove cards if matched

			  setTimeout(function() {if(cardValues.length === 2 && (cardValues[0] === cardValues[1])) {

        // Mark cards as matched and play matched animation

        flippedCard = document.querySelectorAll('.active img.cardsOff');
        flippedCards.forEach((matchedPair) => {
          matchedPair.classList.add('cardsMatch');
          matchedPair.classList.remove('cardsOff');
        })

        // Update scoreboard

        let scoreBoard = document.querySelector('.score');
        const cardsMatch = document.querySelectorAll('.cardsMatch').length;
        const currentScore = (cardsMatch / 2);

        scoreBoard.innerHTML = currentScore;

        // Remove matched pair from Game

        flippedCardMatch = document.querySelectorAll('.active img.cards');

        flippedCardMatch.forEach((matchedPair) => {
          matchedPair.classList.add('matched');
          matchedPair.classList.remove('cards');
        })

        const cardValues = ''


      } else if(cardValues.length === 2) {

        // If cards not matched turn them back over

        card.forEach((unMatchedPair) => {
              unMatchedPair.classList.remove('active');
            const cardValues = '';
         });
       }},300);
		  });
    });
  });
});


// Timer

let timeUpdater = null;

function updateTimer(time,displayedTime) {
  const gameOver = document.querySelector('.game-over');
  const win = document.querySelector('.win');
  const board = document.querySelector('.board');
  let scoreBoard = document.querySelector('.score');
  let lengthOfTime = time;


  timeUpdater = setInterval(function () {

    if(time === 1) {
      clearInterval(timeUpdater);
      board.style.pointerEvents = 'none';
      displayedTime.style.display = 'none';
      gameOver.style.display = 'initial';
    }

    setTimeout(function() {
      if(scoreBoard.innerHTML === '26') {
        clearInterval(timeUpdater);
        board.style.pointerEvents = 'none';
        displayedTime.style.display = 'none';
        win.style.display = 'initial';
      }
    }, 2000);

    // Construct timer

    let minutes = Math.floor(lengthOfTime / 60);
    let seconds = (lengthOfTime % 60);
    let displayedTimeContainer = `${minutes}:${seconds}`;

    if(minutes < 1) {
      displayedTime.style.color = 'red';
    }
    if(seconds < 10) {
      displayedTimeContainer = `${minutes}:0${seconds}`;
    }
    if((minutes > 0) && (seconds === 0)) {
      displayedTimeContainer = `${minutes}:${seconds}0`;
    };

    displayedTime.innerHTML = displayedTimeContainer;
    time = lengthOfTime--;

  }, 1000)
}

//  Reset timer

function resetTimer() {
  clearInterval(timeUpdater);
}


// Shuffle cards and start game

function startGame() {
  const gameOver = document.querySelector('.game-over');
  const win = document.querySelector('.win');
  const displayedTime = document.querySelector('.timer');
  const board = document.querySelector('.board');
  let scoreBoard = document.querySelector('.score');
  const title = document.querySelector('.title');

  title.style.display = 'none';
  displayedTime.style.color = 'black';

  scoreBoard.innerHTML = 0;
  cardValues = '';

  board.style.pointerEvents = 'initial';
  displayedTime.style.display = 'initial';
  gameOver.style.display = 'none';
  win.style.display = 'none';

  card = document.querySelectorAll('.card');

  card.forEach((item) => {
    item.classList.remove('active');
  });


  match = document.querySelectorAll('.cardsMatch');

  match.forEach((item) => {
    item.classList.add('cardsOff');
    item.style.animation = '';
    item.classList.remove('cardsMatch');
  });

  cardDown = document.querySelectorAll('.matched');

  cardDown.forEach((item) => {
    item.classList.add('cards');
    item.classList.remove('matched');
  });

 	const parent = $('.board');
  const children = parent.children();
	const child = children.length

  while (children.length) {
    parent.append(children.splice(Math.floor(Math.random() *  children.length), 1))
  }



  const cardOff = document.querySelectorAll('.cardsOff');
  cardOff.forEach((item) => {
      item.removeAttribute("style");
  });

  console.log(cardOff)

  resetTimer();
  updateTimer(180,displayedTime);
}

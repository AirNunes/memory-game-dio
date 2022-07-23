const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.toggle('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMath();
}

function checkForMath() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
    //dataset.card - data-card for atributo e o valor forem iguais
       disableCards();
       return;
    }

    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
    // primeiro e segundo array, colocar hasFlippedCard e lockBoard como false, igualmente firstCard e secondCard.
    //criar um outro array
}

(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        // conta que vai sortear esse método Math (várias propriedades e métodos de matemática), random vai sortear entre até 12 um número até 1. Math.floor vai arredondar o resultado dessa expressão. Vai sortear números de 0 a 1.
        card.style.order = randomPosition;
    })
})(); // immediately invocation

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})
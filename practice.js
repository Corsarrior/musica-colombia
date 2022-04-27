const flashcardInner = document.querySelector(".flashcard__inner")
const buttonNext = document.querySelector(".button-next");
const buttonPrev = document.querySelector(".button-prev")

let cardIndex = 0;
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem("items"))
    : [];


flashCardMaker(contentArray[cardIndex])

buttonNext.addEventListener("click", getNextCard)
buttonPrev.addEventListener("click", getPrevCard)

function populateNextCard() { };
function getNextCard() {
    if (cardIndex < contentArray.length) {
        cardIndex++;
        flashCardMaker(contentArray[cardIndex]);
    }
}

function getPrevCard() {
    if (cardIndex > 0) {
        cardIndex--;
        flashCardMaker(contentArray[cardIndex]);
    }
};

function flashCardMaker(text, delThisIndex) {

    const flashcardFaceFront = document.querySelector(".flashcard__face--front h2");
    const flashcardFaceBack = document.querySelector(".flashcard__body");
    const counter = document.querySelector(".counter");

    flashcardFaceFront.textContent = text.myQuestion;
    flashcardFaceBack.textContent = text.myAnswer;
    console.log(cardIndex)
    counter.textContent = `${cardIndex + 1}/${contentArray.length}`;

}

flashcardInner.addEventListener("click", () => {
    flashcardInner.classList.toggle("is-fliped");
})



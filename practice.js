const flashcardInner = document.querySelector(".flashcard__inner")
const buttonNext = document.querySelector(".button-next");
const buttonPrev = document.querySelector(".button-prev")

let cardIndex = 0;

let pacificMusic = [
    {
        "myQuestion": "https://www.youtube.com/embed/NVEwxS268u4",
        "myAnswer": "Currulao"
    },
    {
        "myQuestion": "https://www.youtube.com/embed/O9KpKPRkIQ0",
        "myAnswer": "Abozao"
    },
    {
        "myQuestion": "https://www.youtube.com/embed/V9wMFh-zxJ0",
        "myAnswer": "Calipso"
    },
    {
        "myQuestion": "https://www.youtube.com/embed/Nie8Rbtz_z0",
        "myAnswer": "Violines Caucanos"
    },
    {
        "myQuestion": "https://www.youtube.com/embed/vtayPSLAGBo",
        "myAnswer": "Bunde"
    }
]

let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem("items"))
    : pacificMusic;

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

    const iframe = document.querySelector("iframe");
    const flashcardFaceBack = document.querySelector(".flashcard__body");
    const counter = document.querySelector(".counter");

    iframe.src = text.myQuestion + "?autoplay=1&modestbranding=1&rel=0";
    flashcardFaceBack.textContent = text.myAnswer;
    console.log(cardIndex)
    counter.textContent = `${cardIndex + 1}/${contentArray.length}`;

}

flashcardInner.addEventListener("click", () => {
    flashcardInner.classList.toggle("is-fliped");
})




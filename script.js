const buttonSave = document.querySelector(".button-save");
const buttonClose = document.querySelector(".button-close");
const buttonAdd = document.querySelector(".button-add");
const buttonDelete = document.querySelector(".button-delete");


const createCard = document.querySelector(".create-card");
const flashcards = document.querySelector(".flashcards")


// Evaluate if we are already using localStorage to return the information stored
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem("items"))
    : [];

contentArray.forEach(flashCardMaker);

buttonAdd.addEventListener("click", showCreateCard);
buttonDelete.addEventListener("click", delFlashcards);
buttonSave.addEventListener("click", saveFlashCard);
buttonClose.addEventListener("click", closeCreateCard);

function flashCardMaker(text, delThisIndex) {
    //create div flashcard, h2 answer and question
    //add style to both
    //add them to the flashcard
    //add the flashcard to flashcards
    const flashcard = document.createElement("div");
    const flashcardInner = document.createElement("div");
    const flashcardFaceFront = document.createElement("div");
    const flashcardFaceBack = document.createElement("div");
    // const answer = document.createElement("h2");
    // const question = document.createElement("h2");
    const del = document.createElement("i");
    const iframe = document.createElement("iframe");

    flashcard.className = "flashcard"
    flashcardInner.className = "flashcard__inner"
    flashcardFaceFront.className = "flashcard__face flashcard__face--front"
    flashcardFaceBack.className = "flashcard__face flashcard__face--back"
    iframe.className = "iframe"

    iframe.setAttribute("src", `${text.myQuestion}`);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("type", "text/html");
    // src = "" type = "text/html" data - video="" frameborder = "0"
    // question.textContent = text.myQuestion;

    // answer.setAttribute("style", "text-align:center; color:red");
    flashcardFaceBack.textContent = text.myAnswer;

    del.textContent = "x";
    del.className = "fa-minus";
    del.addEventListener("click", () => {
        contentArray.splice(delThisIndex, 1);
        localStorage.setItem('items', JSON.stringify(contentArray));
        window.location.reload();
    })

    flashcard.appendChild(flashcardInner);
    flashcardInner.appendChild(flashcardFaceFront)
    flashcardInner.appendChild(flashcardFaceBack)
    flashcardFaceFront.appendChild(iframe);
    flashcardFaceFront.appendChild(del);

    flashcardInner.addEventListener("click", () => {
        flashcardInner.classList.toggle("is-fliped");
    })

    // Old form to show the answer of the card
    // flashcard.addEventListener("click", () => {
    //     if (answer.style.display == "none")
    //         answer.style.display = "block"
    //     else
    //         answer.style.display = "none"
    // })

    flashcard.addEventListener("click", function (e) {
        flashcard.classList.toggle("is-flipped");
    })

    flashcards.appendChild(flashcard);

}

function saveFlashCard() {
    // Store the user info in a dictionary, push it into the array of cards, 
    // save it in the localStorage, render the new flashcard and
    // clean the question and text area values.
    const question = document.querySelector("#question");
    const answer = document.querySelector("#answer");

    let flashCardInfo = {
        "myQuestion": question.value,
        "myAnswer": answer.value
    }
    contentArray.push(flashCardInfo);
    localStorage.setItem("items", JSON.stringify(contentArray));
    //The second argument is the idex of the card, the first one is the 
    //dictionary with the card info.
    flashCardMaker(contentArray[contentArray.length - 1], contentArray.length - 1);
    question.value = "";
    answer.value = "";
}

function closeCreateCard() {
    createCard.style.display = "none";
}
function showCreateCard() {
    createCard.style.display = "block";
}
function delFlashcards() {
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}


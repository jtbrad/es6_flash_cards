let cardHolder = document.getElementById("card-holder");
let cards = [];
let createNewCardBtn = document.getElementById("new-card-btn");

const createNewCard = () => {
  let card = {
    title: "Test"
  };
  cards.push(card);
  renderCards();
}

const renderCards = () => {
  let text = ""
  for(i in cards) {
    text += `<div class="card"> ${cards[i].title} </div>`;
  }
  cardHolder.innerHTML = text;
}

createNewCardBtn.addEventListener("click", createNewCard);

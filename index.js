let cardHolder = document.getElementById("card-holder");
let cards = [];
let cardId = 0;
let createNewCardBtn = document.getElementById("new-card-btn");

const createNewCard = () => {
  let card = {
    back: "Answer",
    display: "Question",
    front: "Question",
    id: cardId,
    isfront: true
  };
  cardId += 1;
  cards.push(card);
  renderCards();
}

const renderCards = () => {
  cardHolder.innerHTML = "";
  
  for(i in cards) {
    renderCard(cards[i]);
  }

}

const renderCard = (card) => {
  let attr = document.createAttribute("class");
  attr.value = "card";

  let flipCardbtn = document.createElement("BUTTON");
  flipCardbtn.innerHTML = "Flip Card";
  flipCardbtn.addEventListener("click", function(){
    flipCard(card);
  });

  let cardTag = document.createElement("DIV");
  cardTag.setAttributeNode(attr);
  cardTag.innerHTML = card.display;
  cardTag.appendChild(flipCardbtn);

  cardHolder.appendChild(cardTag);
}

const flipCard = (card) => {
  if (card.isfront === true) {
    card.display = card.back
    card.isfront = false
  } else {
    card.display = card.front
    card.isfront = true
  }
  renderCards();
}

const removeCard = (card) => {
  
}

createNewCardBtn.addEventListener("click", createNewCard);

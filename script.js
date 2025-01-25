let activeCard = document.getElementById("card1");
let cards = document.getElementsByClassName("card");
console.log(cards);

for (let card of cards) {
  if (!card.classList.contains("active")) {
    card.classList.add("card-bg");
  }

  card.addEventListener("click", () => {
    let activeCardTool = activeCard.querySelector(".card-tools");
    let currentActiveBg = activeCard.querySelector(".bg-none"); // Get the bg-none inside the active card
    let nextActiveBg = card.querySelector(".bg-none");
    let BeforeInactiveBtn = activeCard.querySelector(".card-btn");
    let BeforeInactiveTools = activeCard.querySelector(".card-tools");

    let nextActiveText = activeCard.querySelector(".card-info-area");

    let nextActiveCardTool = card.querySelector(".card-tools");

    let previousCard;

    if (card.classList.contains("inactive")) {
      if (
        (card === cards[1] && activeCard === cards[0]) ||
        (card === cards[2] && activeCard === cards[1]) ||
        (card === cards[2] && activeCard === cards[0])
      ) {
        activeCardTool.classList.add("transition-left-out", "transition");
        nextActiveCardTool.classList.add("transition-left-in");
      } else if (
        (card === cards[1] && activeCard === cards[2]) ||
        (card === cards[0] && activeCard === cards[1]) ||
        (card === cards[0] && activeCard === cards[2])
      ) {
        activeCardTool.classList.add("transition-right-out", "transition");
        nextActiveCardTool.classList.add("transition-right-in");
      }
      nextActiveText.classList.remove("card-info-area");
      nextActiveText.classList.add("card-info-animation");

      // BeforeInactiveTools.classList.remove("card-tools");
      // BeforeInactiveTools.classList.add("card-tools-animation");
      activeCardTool.classList.remove("card-tools");

      BeforeInactiveBtn.classList.remove("card-btn");
      BeforeInactiveBtn.classList.add("card-btn-animation");

      currentActiveBg.classList.remove("bg-none");
      nextActiveBg.classList.remove("bg-none");

      currentActiveBg.classList.add("bg-overlay");
      nextActiveBg.classList.add("bg-overlay-active");

      activeCard.classList.remove("active");
      activeCard.classList.add("inactive");

      card.classList.remove("inactive");
      card.classList.add("active");

      previousCard = activeCard;
      activeCard = card;
    }

    setTimeout(() => {
      currentActiveBg.classList.remove("bg-overlay");
      currentActiveBg.classList.add("bg-none");

      nextActiveBg.classList.remove("bg-overlay-active");
      nextActiveBg.classList.add("bg-none");

      activeCardTool.classList.remove("transition-left-out");
      nextActiveCardTool.classList.remove("transition-left-in");

      activeCardTool.classList.remove("transition-right-out");
      nextActiveCardTool.classList.remove("transition-right-in");
    }, 1000);

    setTimeout(() => {
      BeforeInactiveBtn.classList.remove("card-btn-animation");
      BeforeInactiveBtn.classList.add("card-btn");
      nextActiveText.classList.remove("card-info-animation");
      nextActiveText.classList.add("card-info-area");
    }, 500);

    setTimeout(() => {
      card.classList.remove("card-bg");

      previousCard.classList.add("card-bg");
      activeCardTool.classList.remove("transition");

      BeforeInactiveTools.classList.remove("card-tools-animation");
      BeforeInactiveTools.classList.add("card-tools");
    }, 500);
  });
}

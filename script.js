let activeCard = document.getElementById("card1");
let cards = document.getElementsByClassName("card");

// let overlay_bg = document.getElementsByClassName("bg-color");

for (let card of cards) {
  if (!card.classList.contains("active")) {
    card.classList.add("card-bg");
  }

  card.addEventListener("click", () => {
    let currentActiveBg = activeCard.querySelector(".bg-none"); // Get the bg-none inside the active card
    let nextActiveBg = card.querySelector(".bg-none");
    let BeforeInactiveBtn = activeCard.querySelector(".card-btn");
    let BeforeInactiveTools = activeCard.querySelector(".card-tools");

    let nextActiveText = activeCard.querySelector(".card-info-area");
    //from inactive card
    // let afterInactiveBtn = card

    // activeCard.classList.remove("card-bg");
    let previousCard;

    if (card.classList.contains("inactive")) {
      nextActiveText.classList.remove("card-info-area");
      nextActiveText.classList.add("card-info-animation");

      BeforeInactiveTools.classList.remove("card-tools");
      BeforeInactiveTools.classList.add("card-tools-animation");

      BeforeInactiveBtn.classList.remove("card-btn");
      BeforeInactiveBtn.classList.add("card-btn-animation");

      currentActiveBg.classList.remove("bg-none");
      currentActiveBg.classList.add("bg-overlay");

      nextActiveBg.classList.remove("bg-none");
      nextActiveBg.classList.add("bg-overlay-active");

      activeCard.classList.remove("active");
      activeCard.classList.add("inactive");

      card.classList.remove("inactive");
      card.classList.add("active");

      previousCard = activeCard;
      activeCard = card;
    }

    // if(card.classList.contains(""))
    setTimeout(() => {
      currentActiveBg.classList.remove("bg-overlay");
      currentActiveBg.classList.add("bg-none");

      nextActiveBg.classList.remove("bg-overlay-active");
      nextActiveBg.classList.add("bg-none");

      BeforeInactiveTools.classList.remove("card-tools-animation");
      BeforeInactiveTools.classList.add("card-tools");

      // in to out btn and tools animation
      // BeforeInactiveBtn.style.display = "none";
      BeforeInactiveBtn.classList.remove("card-btn-animation");
      BeforeInactiveBtn.classList.add("card-btn");

      nextActiveText.classList.remove("card-info-animation");
      nextActiveText.classList.add("card-info-area");
    }, 1000);

    setTimeout(() => {
      card.classList.remove("card-bg");

      // Remove 'card-bg' from the previous active card after the animation ends
      previousCard.classList.add("card-bg");
    }, 500);
  });
}

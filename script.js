let activeCard = document.getElementById("card1");
let cards = document.getElementsByClassName("card");

// let overlay_bg = document.getElementsByClassName("bg-color");

for (let card of cards) {
  card.addEventListener("click", () => {
    let currentActiveBg = activeCard.querySelector(".bg-none");
    // Get the bg-none inside the active card
    let nextActiveBg = card.querySelector(".bg-none");

    if (card.classList.contains("inactive")) {
      currentActiveBg.classList.remove("bg-none");
      currentActiveBg.classList.add("bg-overlay");

      nextActiveBg.classList.remove("bg-none");
      nextActiveBg.classList.add("bg-overlay-active");

      // setTimeout(() => {
      activeCard.classList.remove("active");
      activeCard.classList.add("inactive");

      card.classList.remove("inactive");
      card.classList.add("active");

      activeCard = card;
    }
    setTimeout(() => {
      currentActiveBg.classList.remove("bg-overlay");
      currentActiveBg.classList.add("bg-none");

      nextActiveBg.classList.remove("bg-overlay-active");
      nextActiveBg.classList.add("bg-none");
    }, 800);
  });
}

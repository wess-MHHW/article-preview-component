const share = document.querySelector(".share-btn");
const pop = document.querySelector(".pop-up");

share.addEventListener("click", () => {
  pop.classList.toggle("selected");
  share.classList.toggle("click");
});

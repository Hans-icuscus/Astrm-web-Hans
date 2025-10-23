

const cards = document.querySelectorAll(".card");
const overlay = document.getElementById("overlay");
const overlayImg = overlay.querySelector("img");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const imgSrc = card.getAttribute("data-img");
    overlayImg.src = imgSrc;
    overlay.classList.add("active");
  });
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
  }
});

//footer
const currentYear = document.getElementById("current-year");
currentYear.textContent = new Date().getFullYear();

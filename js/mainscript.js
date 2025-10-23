//main banner
const banner = [
  "https://upload.wikimedia.org/wikipedia/commons/4/43/ESO-VLT-Laser-phot-33a-07.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/1f/Interstellar_medium_annotated.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/18/Mauna_Kea_observatory.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg",
];

const bener = document.querySelector(".banner");
let currentIndex = 0;

function changeBackground() {
  bener.style.backgroundImage = `url('${banner[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % banner.length;
}

changeBackground();
setInterval(changeBackground, 5869);

bener.style.filter = "brightness(70%) contrast(120%)";
const text = document.querySelector(".web_title");
text.style.color = "white";

//judule ganti
function gantijudul() {
  const gantine = document.getElementById("judul");
  gantine.innerText =
    gantine.innerText == "LuarAngkasa" ? "Astronomi" : "LuarAngkasa";
}

//P atas
document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("data-target");
      const fullContent = document.getElementById(targetId);

      fullContent.classList.toggle("expanded");

      if (fullContent.classList.contains("expanded")) {
        this.textContent = "...Sembunyikan";
      } else {
        this.textContent = "Baca Selengkapnya...";
      }
    });
  });
});

//Ptga
document.addEventListener("DOMContentLoaded", function () {
  const paragrafs1 = document.getElementById("paragrafs1");
  const articleCards = document.querySelectorAll(".Paragraf1");
  const readMoreButtons1 = document.querySelectorAll(".read-more1");

  readMoreButtons1.forEach((button) => {
    button.addEventListener("click", function (evnt) {
      evnt.preventDefault();

      const targetId1 = this.getAttribute("data-target1");
      const articleCard = document.getElementById(targetId1);

      const isExpanded = articleCard.classList.contains("expanded");

      articleCards.forEach((card) => {
        card.classList.remove("expanded");
      });

      if (!isExpanded) {
        this.textContent = "...Sembunyikan";
        articleCard.classList.add("expanded");
        paragrafs1.classList.add("expanded-view");
      } else {
        this.textContent = "Baca Selengkapnya...";
        paragrafs1.classList.remove("expanded-view");
      }
    });
  });
});

//gambar
const overlay = document.getElementById("overlay");
const overlayImg = overlay.querySelector("img");
const galleryImages = document.querySelectorAll("body img");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    overlayImg.src = img.src;
    overlay.style.display = "flex";
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

//footer
const currentYear = document.getElementById("current-year");
currentYear.textContent = new Date().getFullYear();

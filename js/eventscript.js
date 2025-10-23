

//events tab
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");
  const contentTitle = document.querySelector(".judul_isi");
  const tabContent = document.getElementById("isi");

  const tabsData = {
    tab1: {
      title: "Gerhana",
      paragraphs: [
        " - Gerhana Bulan :",
        "Malam Senin 7 - 8 September 2025 jam 23.30 - 02.50. Gerhana Total",
        "Kamis 3 Maret 2026, jam 18.50 - 20.10 sore. Gerhana Hampir Total",
        "Malam Rabu, 6 - 7 Juli 2028 pada tengah malam. Gerhana Dikit",
        " - Gerhana Matahari :",
        "Sabtu 22 Juli, jam 07.40 - 10.30. Hampir Total",
      ],
    },
    tab2: {
      title: "Meteor",
      paragraphs: [
        "Tengah malam 14 - 15 Desember 2025, puncak Geminids(Azimuth 28, Elevation 48)\nSudah diperkirakan 10 met/h pada 11 desember\nPuncak nya 66 met/h pada 14-15 desember\n17 desember sudah mulai mereda hingga 4 met/h",
        "Tengah malam 14-15 Desember 2026, puncak Geminids(Azimuth 264, Elevation 48)",
        "Tengah malam 14 - 15 Desember 2028, puncak Geminids(Azimuth 345, Elevation 48)\nSudah diperkirakan 12 met/h pada 10 desember\nPuncak nya 91 met/h pada 14 desember 02.00 AM\n16 desember sudah mulai mereda hingga 14 met/h",
      ],
    },
    tab3: {
      title: "Bulan",
      paragraphs: [
        "Bulan Setengah Pertama 30 September",
        "Bulan Purnama 7 Oktober",
        "Bulan Setengah Terakhir 13 Oktober",
        "Bulan Baru 21 Oktober",
        "Bulan Setengah Pertama 30 Oktober",
        "Bulan Purnama 5 November",
        "Bulan Setengah Terakhir 12 November",
        "Bulan Baru 20 November",
        "Bulan Setengah Pertama 28 November",
      ],
    },
  };

  function updateContent(tabId) {
    buttons.forEach((btn) => btn.classList.remove("active"));

    const currentButton = document.querySelector(
      `.button[data-tab="${tabId}"]`
    );
    currentButton.classList.add("active");

    contentTitle.textContent = tabsData[tabId].title;

    tabContent.innerHTML = "";

    tabsData[tabId].paragraphs.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      tabContent.appendChild(p);
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");
      updateContent(tabId);
    });
  });

  updateContent("tab1");
});

//footer
const currentYear = document.getElementById("current-year");
currentYear.textContent = new Date().getFullYear();
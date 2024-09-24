// Toggle class active //
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamberger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Clik diluar sidebar untuk menghilangkan nav
const hamburger1 = document.querySelector("#hamburger-menu");
const hamburger2 = document.getElementById("hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger1.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    hamburger2.classList.remove("is-active");
  }
});

// Hamburger Menu

const hamburger = document.getElementById("hamburger-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
});

/* Pilihan materi, jadwal, ketentuan dan kontak */
const pilihan = document.querySelectorAll(".thumb li");
/*const gambar = document.getElementById("getgambar"); */
const displayImage = document.getElementById("displayImage");

pilihan.forEach((pilihan, index) => {
  pilihan.addEventListener("click", function () {
    switch (index) {
      case 0:
        displayImage.src = "img/osk25c.png";
        displayImage.style.display = "block";
        break;

      case 1:
        displayImage.src = "img/osk25_materi.png";
        displayImage.style.display = "block";
        break;

      case 2:
        displayImage.src = "img/osk25_jadwal.png";
        displayImage.style.display = "block";
        break;

      case 3:
        displayImage.src = "img/osk25_ketentuan.png";
        displayImage.style.display = "block";
        break;

      case 4:
        displayImage.src = "img/osk25c.png";
        displayImage.style.display = "block";
        break;
    }
  });
});

// Album - Thumbnail //
function showContent(src, type, desc) {
  const disp_Image = document.getElementById("albumImage");
  const disp_Video = document.getElementById("albumVideo");
  const descriptionElement = document.getElementById("description");

  if (type === "image") {
    disp_Image.src = src;
    disp_Image.style.display = "block";
    disp_Video.style.display = "none";
  } else if (type === "video") {
    disp_Video.querySelector("source").src = src;
    disp_Video.load(); // Reload the video
    disp_Image.style.display = "none";
    disp_Video.style.display = "block";
  }

  // Tampilkan keterangan di bawah gambar atau video
  descriptionElement.textContent = desc;
}

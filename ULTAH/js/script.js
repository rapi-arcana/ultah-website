// Variabel & Elemen
const introPage = document.getElementById("intro-page");
const startBtn = document.getElementById("start-btn");
const mainContent = document.querySelector(".main-content");
const giftBox = document.getElementById("gift-box");
const surpriseContainer = document.getElementById("surprise-container");
const polaroids = document.querySelectorAll(".polaroid");
const bgMusic = document.getElementById("bg-music"); // Ambil elemen audio

// Mulai Website
// Tambahkan elemen audio ke dalam body
const audio = new Audio("/music/Nadin Amizah - Semua Aku Dirayakan (Official Lyric Video).mp3"); // Sesuaikan path dengan lokasi file musik
audio.loop = true; // Musik akan berulang

startBtn.addEventListener("click", function () {
  introPage.style.opacity = "0";

  setTimeout(function () {
    introPage.style.display = "none";
    mainContent.style.opacity = "1";

    // Putar musik setelah interaksi pengguna
    bgMusic.play().catch(error => console.log("Autoplay diblokir: ", error));
  }, 1000);
});

// Animasi foto saat di-scroll
function checkPolaroids() {
  polaroids.forEach((polaroid) => {
    const polaroidTop = polaroid.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (polaroidTop < windowHeight * 0.85) {
      polaroid.classList.add("visible");
    }
  });
}

// Cek posisi foto saat scroll
window.addEventListener("scroll", checkPolaroids);

// Ubah event listener pada gift box
giftBox.addEventListener("click", function () {
  // Buat elemen div untuk tombol
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "button";

  // Buat tombol dengan link
  const button = document.createElement("button");

  // Buat link
  const link = document.createElement("a");
  link.href = "http://127.0.0.1:5500/html/flower.html";
  link.textContent = "Klik disini";

  // Susun elemen
  button.appendChild(link);
  buttonDiv.appendChild(button);

  // Tampilkan container kejutan dan animasi
  surpriseContainer.style.display = "block";

  // Buat bunga dan love
  for (let i = 0; i < 30; i++) {
    createFlower();
    createHeart();
  }

  // Tambahkan tombol setelah gift box
  giftBox.parentNode.insertBefore(buttonDiv, giftBox.nextSibling);
});

// Fungsi membuat bunga
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.textContent = "🌸";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.fontSize = Math.random() * 20 + 20 + "px";
  flower.style.animationDuration = Math.random() * 3 + 3 + "s";
  surpriseContainer.appendChild(flower);
}

// Fungsi membuat love
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  surpriseContainer.appendChild(heart);
}

// Ganti nama dengan nama pacar
const nama = "Sayang"; // Ganti dengan nama pacar Anda
document.getElementById("name").textContent = nama;

// Set tahun saat ini
document.getElementById("current-year").textContent = new Date().getFullYear();

// Panggil sekali saat halaman dimuat untuk mengaktifkan animasi foto yang sudah tampil
setTimeout(checkPolaroids, 1500);

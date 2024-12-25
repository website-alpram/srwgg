const weAreButton = document.getElementById("weAreButton");
const imageCards = document.querySelectorAll(".image-card");
const closeButton = document.getElementById("closeButton");
const imagesContainer = document.getElementById("imagesContainer");

// Menambahkan event listener untuk tombol "We Are"
weAreButton.addEventListener("click", () => {
  // Sembunyikan tombol We Are saat gambar ditampilkan
  weAreButton.style.display = "none";

  // Menampilkan container gambar dan tombol close
  imagesContainer.style.display = "flex";
  closeButton.style.display = "block";

  // Menambahkan kelas 'show' ke setiap kartu gambar dengan delay bertahap
  imageCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 200); // Delay bertambah untuk animasi
  });

  // Mengizinkan halaman untuk digulirkan (overflow auto) setelah gambar muncul
  document.body.style.overflow = "hidden"; // Mengunci scroll sementara
});

// Menambahkan event listener untuk tombol Close
closeButton.addEventListener("click", closeImages);

// Fungsi untuk menutup gambar
function closeImages() {
  // Menyembunyikan container gambar dan tombol close
  imagesContainer.style.display = "none";
  closeButton.style.display = "none";

  // Menampilkan kembali tombol We Are
  weAreButton.style.display = "block";

  // Mengembalikan scroll halaman ke normal
  document.body.style.overflow = "auto"; // Mengembalikan scroll ke normal

  // Menampilkan alert
  alert("Bagus kan wkwkwk");
}

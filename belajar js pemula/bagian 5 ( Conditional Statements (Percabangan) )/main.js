// 1️⃣ IF, ELSE IF, ELSE
// Digunakan untuk menjalankan kode berdasarkan kondisi tertentu.
// Sintaks Dasar:
if (kondisi) {
    // kode dijalankan jika kondisi benar (true)
} else if (kondisi lain) {
    // kode dijalankan jika kondisi ini benar (true)
} else {
    // kode dijalankan jika semua kondisi sebelumnya salah (false)
}


// 2️⃣ Contoh Sederhana:
let umur = 18;

if (umur >= 18) {
    console.log("Kamu sudah dewasa!");
} else if (umur >= 13) {
    console.log("Kamu remaja!");
} else {
    console.log("Kamu masih anak-anak!");
}

// Penjelasan:
// Jika umur 18 atau lebih, akan mencetak "Kamu sudah dewasa!".
// Jika umur 13 sampai 17, akan mencetak "Kamu remaja!".
// Jika umur kurang dari 13, akan mencetak "Kamu masih anak-anak!".


// 3️⃣ Contoh dengan AND (&&) & OR (||)
let nilai = 85;

if (nilai >= 90 && nilai <= 100) {
    console.log("Nilai kamu A");
} else if (nilai >= 80 && nilai < 90) {
    console.log("Nilai kamu B");
} else if (nilai >= 70 && nilai < 80) {
    console.log("Nilai kamu C");
} else {
    console.log("Kamu harus belajar lebih giat!");
}


// 4️⃣ Ternary Operator (If satu baris)
// Jika hanya ada dua kemungkinan (if dan else), bisa pakai Ternary Operator untuk lebih ringkas:
let cuaca = "hujan";
let pesan = (cuaca === "hujan") ? "Bawa payung!" : "Tidak perlu payung!";
console.log(pesan); // Output: "Bawa payung!"

// ➡ Ternary Operator Format:
(kondisi) ? "jika true" : "jika false";



// Tugas Buat Kamu 🔥
// Buat variabel tinggiBadan dan tentukan apakah seseorang bisa naik roller coaster.

// Jika >= 150 cm → "Boleh naik"
// Jika < 150 cm → "Tidak boleh naik"

// Buat variabel password dan cek apakah itu kuat atau tidak:

// Jika panjang >= 8 karakter → "Password kuat!"
// Jika kurang dari itu → "Password terlalu pendek!"


// 🔥 Tugas Tambahan:
// Buat kode yang bisa mengecek usia pengunjung taman bermain dengan aturan:

// Usia < 5 tahun → "Terlalu kecil untuk bermain"
// Usia 5 - 12 tahun → "Bisa bermain di area anak-anak"
// Usia 13 - 18 tahun → "Bisa bermain di area remaja"
// Usia > 18 tahun → "Bisa bermain di semua wahana"



// 🔥 Tugas Tambahan (Level Up)
// Tambahkan Ternary Operator untuk mengecek apakah seseorang bisa masuk ke "VIP Capybara Club":

// Jika usia >= 18 → "Selamat datang di VIP Capybara Club!"
// Jika < 18 → "Maaf, kamu belum cukup umur untuk VIP Capybara Club."
// 1. Operator dalam JavaScript
// Operator adalah simbol yang digunakan untuk melakukan operasi pada nilai atau variabel.

// 1. Operator Aritmatika (Matematika)
// Digunakan untuk perhitungan angka:

let a = 10;
let b = 3;

console.log(a + b); // Penjumlahan → 13
console.log(a - b); // Pengurangan → 7
console.log(a * b); // Perkalian → 30
console.log(a / b); // Pembagian → 3.333...
console.log(a % b); // Modulus (sisa bagi) → 1
console.log(a ** b); // Pangkat → 1000 (10^3)

// 2. Operator Perbandingan (Hasilnya true atau false)
// Digunakan untuk membandingkan dua nilai:

// 1️⃣ Lebih Besar (>) dan Lebih Kecil (<)
console.log(10 > 5);  // true → karena 10 lebih besar dari 5
console.log(10 < 5);  // false → karena 10 tidak lebih kecil dari 5
// ➡ Intinya:
// > → Benar kalau kiri lebih besar dari kanan.
// < → Benar kalau kiri lebih kecil dari kanan.

// 2️⃣ Lebih Besar Sama Dengan (>=) dan Lebih Kecil Sama Dengan (<=)
console.log(10 >= 10); // true → karena 10 sama dengan 10
console.log(10 <= 9);  // false → karena 10 lebih besar dari 9, bukan lebih kecil/sama
// ➡ Intinya:
// >= → Benar jika kiri lebih besar atau sama dengan kanan.
// <= → Benar jika kiri lebih kecil atau sama dengan kanan.

// 3️⃣ Sama Dengan (==) dan Identik (===)
console.log(10 == "10");  // true
console.log(10 === "10"); // false
// ➡ Bedanya apa?

// == → Cuma cek nilai, tidak peduli tipe datanya.
// "10" (string) == 10 (number) → dianggap sama, jadi hasilnya true.
// === → Cek nilai & tipe data harus sama.
// "10" (string) !== 10 (number), jadi hasilnya false.

// 4️⃣ Tidak Sama (!=) dan Tidak Identik (!==)
console.log(10 !== 5); // true → karena 10 memang tidak sama dengan 5
// ➡ Bedanya apa?

// != → Cek nilai saja, kalau beda hasilnya true.
// !== → Cek nilai & tipe data, kalau beda hasilnya true.



// ==========================================================================



// 3. Operator Logika (AND, OR, NOT)
// Digunakan untuk pengkondisian lebih kompleks:

// 5️⃣ AND (&&)
console.log(true && false); // false
console.log(true && true);  // true
// ➡ Cara kerja AND (&&):
// Hasilnya true jika kedua kondisi benar.
// Kalau ada satu saja false, hasilnya false.

// Contoh lain:
let umur = 18;
let punyaSIM = true;

console.log(umur >= 17 && punyaSIM); // true (karena dua-duanya benar)
console.log(umur >= 17 && !punyaSIM); // false (karena !punyaSIM jadi false)


// 6️⃣ OR (||)
console.log(true || false); // true
console.log(false || false); // false
// ➡ Cara kerja OR (||):
// Hasilnya true jika salah satu kondisi benar.
// Hasilnya false jika semua kondisi false.

// Contoh lain:

let sedangLapar = true;
let adaMakanan = false;

console.log(sedangLapar || adaMakanan); // true (karena sedangLapar true)
console.log(false || false); // false (karena dua-duanya false)


// 7️⃣ NOT (!)
console.log(!true);  // false
console.log(!false); // true
// ➡ Cara kerja NOT (!):
// Membalikkan nilai true jadi false, atau false jadi true.

// Contoh lain:
let hujan = true;
console.log(!hujan); // false → karena hujan itu true, setelah dibalik jadi false


// ==================================================================================


// Kesimpulan Cepat 🔥
//   Operator	               Nama	                                      Hasil
//     >	             Lebih besar	                              10 > 5 → true
//     <	             Lebih kecil	                              10 < 5 → false
//     >=	             Lebih besar atau sama	                      10 >= 10 → true
//     <=	             Lebih kecil atau sama	                      10 <= 9 → false
//     ==	             Sama nilai	                                  10 == "10" → true
//     ===	             Sama nilai & tipe data	                      10 === "10" → false
//     !=	             Tidak sama	                                  10 != 5 → true
//     !==	             Tidak sama (cek tipe juga)	                  10 !== "10" → true
//     &&	             AND (dua-duanya harus true)	              true && false → false
//     `		                                                      `
//     !	             NOT (kebalikan)	                          !true → false


// ==================================================================================



// 🎯 Tugas Ketiga
// Buat variabel x = 20 dan y = 7, lalu:

// Tampilkan hasil x + y, x - y, x * y, x / y, dan x % y.
// Bandingkan apakah x lebih besar dari y dan apakah x sama dengan "20" pakai ===.
// Buat kondisi menggunakan operator logika (misalnya x > 10 && y < 10).
// Coba jalankan dan kasih tahu aku hasilnya! 🚀

let x = 10
let y = 5

console.log(x > y);
console.log(x === 20);

if (x > 10 && y < 10) {
    console.log('true')
} else {
    console.log('false')
}
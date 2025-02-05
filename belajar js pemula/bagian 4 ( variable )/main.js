// 1️⃣ Variabel

// Di JavaScript, ada 3 cara mendeklarasikan variabel:

// var (cara lama, kurang direkomendasikan)
var nama = "Capybara";
console.log(nama); // Capybara

// ➡ Bisa dideklarasikan ulang dan diubah nilainya, tapi bisa menyebabkan bug, jadi jarang dipakai.


// let (cara yang direkomendasikan untuk variabel yang bisa berubah)
let umur = 17;
umur = 18; // Bisa diubah
console.log(umur); // 18

// ➡ Cocok untuk variabel yang nilainya bisa berubah.

// const (untuk nilai tetap, tidak bisa diubah)
const negara = "Indonesia";
negara = "Jepang"; // ❌ Error, karena `const` tidak bisa diubah

// ➡ Gunakan const kalau nilai variabel tidak akan berubah.

// 2️⃣ Tipe Data
// JavaScript punya beberapa tipe data utama:

// Tipe Data	                 Contoh
// String (teks)	             "Halo Dunia"
// Number (angka)	             10, 3.14
// Boolean (true/false)	         true, false
// Array (daftar)	             ["apel", "mangga", "pisang"]
// Object (data kompleks)	     { nama: "masbro", umur: 17 }



// 3️⃣ Operator Aritmatika
// Digunakan untuk perhitungan angka.

// Operator	          Fungsi	                  Contoh
// +	              Penjumlahan	              5 + 3 → 8
// -	              Pengurangan	              5 - 3 → 2
// *	              Perkalian	                  5 * 3 → 15
// /	              Pembagian	                  10 / 2 → 5
// %	              Modulus (sisa bagi)	      10 % 3 → 1
// **	              Pangkat	                  2 ** 3 → 8


// Contoh Penggunaan Operator Aritmatika:
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333
console.log(a % b);  // 1
console.log(a ** b); // 1000 (10 pangkat 3)


// Tugas buat kamu 🔥
// Buatlah variabel berikut dan tampilkan hasil perhitungannya dengan console.log():

// Buat variabel angka1 dengan nilai 20 dan angka2 dengan nilai 7.
// Tampilkan hasil penjumlahan, pengurangan, perkalian, pembagian, modulus, dan pangkat.



// Tugas Tambahan 🔥
// Coba buat 3 variabel angka baru dan lakukan operasi penjumlahan, perkalian, dan modulus 
// dengan kombinasi yang berbeda! 🚀
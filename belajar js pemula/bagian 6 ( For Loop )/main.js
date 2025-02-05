// 🔄 1️⃣ FOR LOOP
// Digunakan untuk mengulang kode dengan jumlah yang sudah diketahui.

// 🛠 Sintaks Dasar:

for (let i = 0; i < 5; i++) {
    console.log(`Loop ke-${i}`);
}

// Penjelasan:

// let i = 0 → Mulai dari angka 0.
// i < 5 → Loop berjalan selama i kurang dari 5.
// i++ → i bertambah 1 setiap loop.

// 📝 Contoh For Loop:

for (let i = 1; i <= 10; i++) {
    console.log(`Capybara ke-${i}`);
}


// 🔄 2️⃣ WHILE LOOP
// Digunakan jika kita tidak tahu jumlah pasti pengulangan.

// 🛠 Sintaks Dasar:

let j = 0;
while (j < 5) {
    console.log(`Perulangan ke-${j}`);
    j++; // Jangan lupa ini, biar loop tidak infinite loop
}

// 📝 Contoh While Loop:

let k = 1;
while (k <= 5) {
    console.log(`Capybara suka berenang ke-${k}`);
    k++;
}


// 🔄 3️⃣ DO WHILE LOOP
// Mirip while, tapi pasti dijalankan sekali, meskipun kondisinya salah.

// 🛠 Sintaks Dasar:

let x = 10;
do {
    console.log("Kode ini pasti dijalankan sekali!");
    x++;
} while (x < 5);  // Kondisi salah, tapi tetap dijalankan sekali


// 📝 Contoh Do While Loop:

let angka = 1;
do {
    console.log(`Angka: ${angka}`);
    angka++;
} while (angka <= 5);



// 🔥 Tugas Buat Kamu 🔥
// Gunakan for loop untuk mencetak angka dari 1 sampai 10.
// Gunakan while loop untuk mencetak angka kelipatan 2 dari 2 sampai 20.
// Gunakan do while loop untuk mencetak "Saya suka capybara!" sebanyak 3 kali.

// tugas pertama
for (i = 1; i <= 10; i++) {
    console.log(`ini angka ke - ${i}`)
}

// tugas kedua
let int = 20
if (int % 2 === 0) {
    while
}
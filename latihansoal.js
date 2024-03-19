// menggunakan prompt untuk mendapatkan input dari pengguna
var luastanah = prompt("masukkan luas tanah (hektar):")
var produksiperhektar = prompt("masukkan jumlah beras per hektar (ton):")
var kapasitaskarung = 100; // kapasitas karung dalam kg

// menghitung total produksi beras
var totalproduksi = luastanah * produksiperhektar;

//menghitung jumlahh karung yang dibutuhkan
var jumlahkarung = totalproduksi * 1000 / kapasitaskarung // mengonversi ton ke kg

// menampilkan hasil
document.write("total produksi beras:", totalproduksi, "ton"+"<br>")
document.write("jumlah karungb yang dibutuhkan:", Math.ceil(jumlahkarung), "karung")
let jumlahbeli=parseInt(prompt("masukkan jumlah beli :"));
if(jumlahbeli>=1000000){
    diskon=0.1*jumlahbeli
}
else if(jumlahbeli>=500000){
    diskon=0.05*jumlahbeli;
}
else{
    diskon=0;
}
document.write("jumlah beli "+jumlahbeli+"<br>");
document.write("diskon "+diskon);
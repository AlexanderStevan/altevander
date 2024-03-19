var nilaifisika=prompt("masukkan nilai fisika: ");
var nilaimatematika=prompt("masukkan nilai matematika: ");
var nilaiinggris=prompt("masukkan nilai bahasa inggris: ");

nilaifisika=parseFloat(nilaifisika);
nilaimatematika=parseFloat(nilaimatematika);
nilaiinggris=parseFloat(nilaiinggris);

var ratarata=(nilaifisika+nilaimatematika+nilaiinggris)/3;
var nilaihuruf;

if(ratarata>=90) {
    nilaihuruf='A';
}else if(ratarata >=80) {
    nilaihuruf='B';
}else if(ratarata >=70) {
    nilaihuruf='C';
}else{nilaihuruf='D';
}

document.write("rata rata nilai:",ratarata+"<br>");
document.write("nilai huruf:", nilaihuruf);
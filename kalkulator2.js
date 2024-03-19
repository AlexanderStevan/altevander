function hitung(){
    let stev=parseInt(document.getElementById("angka1").value);
    let stev2=parseInt(document.getElementById("angka2").value);
    let op=document.getElementById("operator").value;
    let hasil=0
    switch (op) {
        case "+":
            hasil=stev+stev2;
            break;
        case "-":
            hasil=stev-stev2;
            break;
         case "*":
            hasil=stev*stev2;
            break;
         case "/":
            hasil=stev/stev2;
            break;
    }
    document.getElementById("hasil").walue=hasil;
    //document.write(stev+" "+op+" "+stev2+" = "+hasil);
    }
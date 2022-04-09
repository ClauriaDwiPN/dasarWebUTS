function hasil() {
    var harga=parseInt(document.getElementById('harga').value);
    var jumlah=parseInt(document.getElementById("jumlah").value);
    var total=harga*jumlah;
    document.getElementById("total").innerHTML=total;
    var dis =0.1;
    var dis1 =0.07;
    var dis2 =0.05;
    var bayar;
    var bayar1;
    var bayar2;
    if(jumlah>3){
        bayar = total-(total*dis);
        document.getElementById("bayar").innerHTML=bayar;
        document.getElementById("dis").innerHTML="10%";
    }else if(jumlah>=2){
        bayar1 = total-(total*dis1);
        document.getElementById("bayar").innerHTML=bayar1;
        document.getElementById("dis").innerHTML="7%";
    }else{
        bayar2 = total-(total*dis2);
        document.getElementById("bayar").innerHTML=bayar2;
        document.getElementById("dis").innerHTML="5%";
    }
}
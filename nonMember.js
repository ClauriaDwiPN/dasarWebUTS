function hasil() {
    var harga=parseInt(document.getElementById('harga').value);
    var jumlah=parseInt(document.getElementById("jumlah").value);
    var total=harga*jumlah;
    document.getElementById("total").innerHTML=total;
    var dis =0.05;
    var bayar;
    var bayar1;
    var bayar2;
    if(jumlah>=3){
        bayar = total-(total*dis);
        document.getElementById("bayar").innerHTML=bayar;
        document.getElementById("dis").innerHTML="5%";
    }else{
		bayar1 = total;
        document.getElementById("bayar").innerHTML=bayar1;
        document.getElementById("dis").innerHTML="0%";
    }
}
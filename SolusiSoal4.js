function hitungDiskon(totalBelanja) {
    let diskon = 0;
    
    if (totalBelanja >= 500000 && totalBelanja <= 1000000) {
        diskon = 0.05 * totalBelanja;
    } else if (totalBelanja > 1000000) {
        diskon = 0.10 * totalBelanja;
    }
    
    return diskon;
}

let totalBelanja = 600000;
let diskon = hitungDiskon(totalBelanja);
let totalBayar = totalBelanja - diskon;

console.log("Total Belanja: Rp" + totalBelanja.toLocaleString());
console.log("Diskon: Rp" + diskon.toLocaleString());
console.log("Total Bayar: Rp" + totalBayar.toLocaleString());
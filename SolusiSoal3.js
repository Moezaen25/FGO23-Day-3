function konversiSuhu(nilai, dari, ke) {
    let suhuDalamCelcius;
    
    switch (dari.toLowerCase()) {
        case 'c':
            suhuDalamCelcius = nilai;
            break;
        case 'r':
            suhuDalamCelcius = nilai * (5/4);
            break;
        case 'f':
            suhuDalamCelcius = (nilai - 32) * (5/9);
            break;
        case 'k':
            suhuDalamCelcius = nilai - 273.15;
            break;
        default:
            return 'Satuan asal tidak valid';
    }
    
    let hasil;
    switch (ke.toLowerCase()) {
        case 'c':
            hasil = suhuDalamCelcius;
            break;
        case 'r':
            hasil = suhuDalamCelcius * (4/5);
            break;
        case 'f':
            hasil = (suhuDalamCelcius * (9/5)) + 32;
            break;
        case 'k':
            hasil = suhuDalamCelcius + 273.15;
            break;
        default:
            return 'Satuan tujuan tidak valid';
    }
    
    return hasil;
}
console.log("30C ke F: ", konversiSuhu(30, 'C', 'F'));
console.log("100F ke K: ", konversiSuhu(100, 'F', 'K'));
console.log("273K ke R: ", konversiSuhu(273, 'K', 'R'));
console.log("50R ke C: ", konversiSuhu(50, 'R', 'C'));
function konversiSuhu(suhu, dariSatuan, keSatuan) {
  let celcius;

  if (dariSatuan.toLowerCase() === "c") {
    celcius = suhu;
  } else if (dariSatuan.toLowerCase() === "r") {
    celcius = (suhu * 5) / 4;
  } else if (dariSatuan.toLowerCase() === "f") {
    celcius = ((suhu - 32) * 5) / 9;
  } else if (dariSatuan.toLowerCase() === "k") {
    celcius = suhu - 273.15;
  } else {
    return "Satuan asal tidak dikenal";
  }

  let hasil;
  if (keSatuan.toLowerCase() === "c") {
    hasil = celcius;
  } else if (keSatuan.toLowerCase() === "r") {
    hasil = (celcius * 4) / 5;
  } else if (keSatuan.toLowerCase() === "f") {
    hasil = (celcius * 9) / 5 + 32;
  } else if (keSatuan.toLowerCase() === "k") {
    hasil = celcius + 273.15;
  } else {
    return "Satuan tujuan tidak dikenal";
  }

  return `${suhu} ${dariSatuan.toUpperCase()} = ${hasil.toFixed(
    2
  )} ${keSatuan.toUpperCase()}`;
}

console.log(konversiSuhu(100, "C", "F"));
console.log(konversiSuhu(0, "C", "K"));
console.log(konversiSuhu(80, "R", "C"));

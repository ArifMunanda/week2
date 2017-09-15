var tanggal = 11;
var bulan = "September";
var tahun = 1991;

var kodeBulan = 0;

switch (bulan) {
  case 'Januari':
  case 'Oktober':
    kodeBulan = 0;
    break;
  case 'Mei':
    kodeBulan = 1;
    break;
  case 'Agustus':
    kodeBulan = 2;
    break;
  case 'Februari':
  case 'Maret':
  case 'November':
    kodeBulan = 3;
    break;
  case 'Juni':
    kodeBulan = 4;
    break;
  case 'September':
  case 'Desember':
    kodeBulan = 5;
    break;
  default:
    kodeBulan = 6;
}

//Lanjutkan kode dari sini
var thnlahir = tahun%100;
var thnlahirbagi4 = Math.floor(thnlahir/4);
var jawaban = (thnlahir + thnlahirbagi4 + tanggal + kodeBulan) % 7;
var tebakan;

switch (jawaban) {
  case 0:
    tebakan="Minggu";break;
  case 1:
    tebakan='Senin';break;
  case 2:
    tebakan='Selasa';break;
  case 3:
    tebakan='Rabu';break;
  case 4:
    tebakan='Kamis';break;
  case 5:
    tebakan='Jumat';break;
  case 6:
    tebakan='Sabtu';break;
}
console.log(tebakan);

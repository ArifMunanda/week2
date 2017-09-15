var nama = "Arif";
var peran = 'Ksatria';
if (nama===""&& peran==="") {
  console.log("nama dan peran tidak boleh kosong");
}else if (nama!==''&&peran==='Ksatria'){
  console.log("selamat datang "+peran+' '+nama+' di proxytia');
  console.log('halo '+peran+' '+nama+', kamu dapat menyerang dengan senjatamu');
}
else if (nama!==''&&peran==='Tabib') {
  console.log("Selamat datang di Dunia Proxytia "+nama);
  console.log("Halo " +peran+' '+nama+' Kamu akan membantu temanmu yang terluka');
}
else if (nama!==''&&peran==='Penyihir') {
  console.log("Selamat datang di Dunia Proxytia, "+nama);
  console.log("halo "+peran+ ' '+nama+ ', ciptakan keajaiban yang membantu kemenanganmu ');
}else {
  console.log('pilihan salah');
}

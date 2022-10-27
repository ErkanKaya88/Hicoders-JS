let skor = 100;
let saklanilanVagon = 8; // bir saklanilan vagon girilir

for (let index = 0; index < 4; index++) {
  let tahmin = prompt("bir tahmin giriniz");
  if (index < 3) {
    if (tahmin == saklanilanVagon) {
      console.log("Bravo buldunuz. Puaniniz: " + skor);
      break; // eger tahmin dogruysa döngü kirilir
    } else if (saklanilanVagon < tahmin) {
      console.log("oglun daha kücük bir vagonda");
      skor -= 25; // her tahmin hakkinda skor 25 azalir
    } else {
      console.log("oglun daha büyük bir vagonda");
      skor -= 25; // her tahmin hakkinda skor 25 azalir
    }
  } else {
    // son tahmin hakkinda bilmesi ve bilmemesi durumunda farkli iki durum yazdirilir
    if (tahmin == saklanilanVagon) {
      console.log("Bravo buldunuz. Puaniniz: " + skor);
    } else {
      skor -= 25;
      console.log("cocugunuzu bulamadiniz. Puaniniz: " + skor);
    }
  }
}

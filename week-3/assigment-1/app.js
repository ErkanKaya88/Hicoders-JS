const sayilar = [7, 1, 1, 7, 1, 7, 99, 99, 12, 8, 12, 12, 99, 8];

const sayilar2 = []; //yeni bir dizi olusturdum. elementleri icine göndermek icin

for (let i = 0; i < sayilar.length; i++) {
  const element = sayilar[i];
  let counter = 0;
  for (let j = 0; j < sayilar.length; j++) {
    if (element == sayilar[j]) {
      counter++;
    } // sayac ve element karsilastiriliyor
  }
  if (counter === 2) {
    sayilar2.push(sayilar[i]);
  } // sayacin 2 olmasi durumunda ayni elemandan 2 tane vardir demek
}

console.log(sayilar2[0]); // olusturdugum dizi sadece önceki dizide 2 tanae bulunan element. onun da ilk elemanini yazdirdim.

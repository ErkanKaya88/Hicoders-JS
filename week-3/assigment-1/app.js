const sayilar = [7, 1, 1, 7, 1, 7, 99, 99, 12, 8, 12, 12, 99, 8];

const sayilar2 = [];

for (let i = 0; i < sayilar.length; i++) {
  const element = sayilar[i];
  let counter = 0;
  for (let j = 0; j < sayilar.length; j++) {
    if (element == sayilar[j]) {
      counter++;
    }
  }
  if (counter === 2) {
    sayilar2.push(sayilar[i]);
  }
}

console.log(sayilar2[0]);

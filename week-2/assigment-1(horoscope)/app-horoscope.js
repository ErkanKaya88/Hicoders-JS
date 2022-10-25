let month = prompt("ay giriniz");
let day = prompt("gün giriniz");
const result = "Horoscope: ";

if (month === "january") {
  if (day <= 20) {
    alert(result + "CAPRICORN");
  } else if (day > 20 && day <= 31) {
    alert(result + "AQUARIS");
  } else {
    alert(result + "lütfen 32den kücük bir sayi giriniz.");
  }
} else if (month === "february") {
  if (day <= 19) {
    alert(result + "AQUARIS");
  } else if (day > 19 && day <= 29) {
    alert(result + "PISCES");
  } else {
    alert(result + "lütfen 30den kücük bir sayi giriniz.");
  }
} else if (month === "march") {
  if (day <= 20) {
    alert(result + "PISCES");
  } else if (day > 20 && day <= 31) {
    alert(result + "ARIES");
  } else {
    alert(result + "lütfen 32den kücük bir sayi giriniz.");
  }
} else if (month === "april") {
  if (day <= 20) {
    alert(result + "ARIES");
  } else if (day > 20 && day <= 30) {
    alert(result + "TAURUS");
  } else {
    alert(result + "lütfen 31den kücük bir sayi giriniz.");
  }
} else if (month === "mai") {
  if (day <= 21) {
    alert(result + "TAURUS");
  } else if (day > 21 && day <= 31) {
    alert(result + "GEMINI");
  } else {
    alert(result + "lütfen 32den kücük bir sayi giriniz.");
  }
} else if (month === "june") {
  if (day <= 21) {
    alert(result + "GEMINI");
  } else if (day > 21 && day <= 30) {
    alert(result + "CANCER");
  } else {
    alert(result + "lütfen 31den kücük bir sayi giriniz.");
  }
} else if (month === "july") {
  if (day <= 23) {
    alert(result + "CANCER");
  } else if (day > 23 && day <= 31) {
    alert(result + "LEO");
  } else {
    alert(result + "lütfen 31den kücük bir sayi giriniz.");
  }
} else if (month === "August") {
  if (day <= 23) {
    alert(result + "LEO");
  } else if (day > 23 && day <= 31) {
    alert(result + "VIRGO");
  } else {
    alert(result + "lütfen 32den kücük bir sayi giriniz.");
  }
} else if (month === "september") {
  if (day <= 23) {
    alert(result + "VIRGO");
  } else if (day > 23 && day <= 30) {
    alert(result + "LIBRA");
  } else {
    alert(result + "lütfen 31den kücük bir sayi giriniz.");
  }
} else if (month === "october") {
  if (day <= 23) {
    alert(result + "LIBRA");
  } else if (day > 23 && day <= 31) {
    alert(result + "SCORPIO");
  } else {
    alert(result + "lütfen 32den kücük bir sayi giriniz.");
  }
} else if (month === "november") {
  if (day <= 22) {
    alert(result + "SCORPIO");
  } else if (day > 22 && day <= 30) {
    alert(result + "SAGITTARIUS");
  } else {
    alert(result + "lütfen 31den kücük bir sayi giriniz.");
  }
} else if (month === "december") {
  if (day <= 22) {
    alert(result + "SAGITTARIUS");
  } else if (day > 22 && day <= 30) {
    alert(result + "CAPRICORN");
  } else {
    alert(result + "lütfen 32den kücük bir sayi giriniz.");
  }
}

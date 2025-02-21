sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt ("10.6");
sonuc = parseFloat ("10.6");
// a' yi siler
sonuc = parseInt ("10a");
// NaN uyarisi
sonuc = parseInt ("a10");

sonuc = isNaN("10");  //false
let sayi = 15.123455678;

// 5 bs yuvarlar
sonuc = sayi.toPrecision(5);

// virgulden sonra 5 bs yuvarlar
sonuc = sayi.toFixed(5);

sonuc = Math.round(2.4);
sonuc = Math.round(2.6);
// bi uste yuvarlar
sonuc = Math.ceil(2.2);
// bi asagi yuvarlar
sonuc = Math.floor(2.6);
sonuc = Math.pow(2,6);
// Math.random()
// mutlak deger
sonuc = Math.abs(-10);
sonuc = Math.min(2,-2,4,8,6,0);
sonuc = Math.max(2,-2,4,8,6,0);
// 0-10 arasi
sonuc = Math.random() * 10;
sonuc = Math.floor(Math.random() * 10) +1;

console.log(typeof sonuc);

console.log(sonuc);
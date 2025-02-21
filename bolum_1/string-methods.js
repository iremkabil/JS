let kursAdi = " Komple Uygulamalı Web Geliştirme Eğitimi. ";

let sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[2];
sonuc = kursAdi.slice(0,6);
// 10.dan itibaren alir
sonuc = kursAdi.slice(10);
// -10 dan sona kadar
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10, -5);

sonuc = kursAdi.substring(0,6);
sonuc = kursAdi.substring(10);

//degistirir
sonuc = kursAdi.replace("Eğitimi","Kursu");

// bastaki ve sondaki bosluk karakterleri siler
sonuc = kursAdi.trim();
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();

// bosluk karakterini sifir alir tirnak içindekini 1 kabul eder
sonuc = kursAdi.indexOf("Kompl");
// bosluklardan ayirir
sonuc = kursAdi.split(" ");

console.log(sonuc);
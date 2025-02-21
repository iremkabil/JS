let url = "http://www.sadikturan.com/";
let kursAdi = "Komple Web Geliştirme Kursu";

let sonuc = url.length;

sonuc=kursAdi.split(" ").length ;

sonuc = url.startsWith("https");
if(sonuc) {
    console.log("evet, basliyor");
}

// kursAdi icerisinde Eğitimi kelimesi var mı ?
if (kursAdi.indexOf("Eğitimi") > -1) {
    console.log("evet var");
}else {
    console.log("hayır yok");
}

// url ve kursAdi degiskenlerini kullanarak asagidaki string bilgiyi olusturunuz.

// https://www.sadikturan.com/komple-web-gelistirme-kursu

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ","-");
kursAdi = kursAdi.replace("ş","s").replace("ı","i");

sonuc = `${url}/${kursAdi}`;

console.log(sonuc);
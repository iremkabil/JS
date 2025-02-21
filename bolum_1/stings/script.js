let ad="İrem";
let soyad="Kabil";
let yas=20;
let sehir="Sakarya";

let mesaj1= "Benim adım " + ad + ' ve soyadım ' + soyad + '. ' + sehir+'\'da yaşıyorum.' + "Mezun olmama " + (23-yas )+" yıl kaldı.";

// backtick
let mesaj2=`Benim adım ${ad} ve soyadım ${soyad}. ${sehir}' da yaşıyorum. Mezun olmama ${23-yas} yıl kaldı.`;

// ternary operators 
let mezuniyet= (23-yas > 0) ? ` Mezuniyete ${23-yas} yil kaldi.` : `Mezun olali ${yas-23} yil oldu.`;

mesaj= `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}' da yaşıyorum.${mezuniyet}`;
console.log(mesaj1);
console.log(mesaj2);
console.log(mesaj);


 let meyveler = ["Elma","Armut","Muz","Çilek"];

//  Dizi kaç elemanlı ?
console.log(meyveler.length);

// Dizinin ilk ve son elemani ?
console.log(meyveler[0]);
console.log(meyveler[meyveler.length - 1]);

// Elma dizini bir elemani mi ? 
// console.log(meyveler.includes("Elma"));
// console.log(meyveler.indexOf("Elma"));

//Kiraz 'i listenin sonuna ekle
//meyveler[meyveler.length] = "Kiraz"
meyveler.push("Kiraz");
console.log(meyveler);

// son 2 elemani sil
// meyveler.splice(meyveler.length-2,2);
console.log(meyveler);



let ogr1 = ["Yiğit", "Bilgi", 2010, [70,60,80]];
let ogr2 = ["Ada", "Bilgi", 2012, [80,80,90]];
let ogr3 = ["Ahmet", "Turan", 2009, [60,60,70]];
// console.log(ogr1.length);

let Yas_ogr1 = new Date().getFullYear() - ogr1[2];
let Yas_ogr2 = new Date().getFullYear() - ogr2[2];
let Yas_ogr3 = new Date().getFullYear() - ogr3[2];

console.log(Yas_ogr1);
console.log(Yas_ogr2);
console.log(Yas_ogr3);

let Ort_ogr1= (ogr1[ogr1.length-1][0] + ogr1[ogr1.length-1][1] + ogr1[ogr1.length-1][2] ) /3;

let Ort_ogr2= (ogr2[ogr2.length-1][0] + ogr2[ogr2.length-1][1] + ogr2[ogr2.length-1][2] ) /3;

let Ort_ogr3= (ogr3[ogr3.length-1][0] + ogr3[ogr3.length-1][1] + ogr3[ogr3.length-1][2] ) /3;

console.log(Ort_ogr1.toFixed(1));
console.log(Ort_ogr2.toFixed(1));
console.log(Ort_ogr3.toFixed(1));
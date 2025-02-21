let isim1= "ada bilgi";
let isim2= "yiğit bilgi";

let dogumTarihi1="2012";
let dogumTarihi2= "2010";

let matNot1_1= 70 ;
let matNot1_2=70;
let matNot1_3=80;

let matNot2_1=40;
let matNot2_2=40;
let matNot2_3=50;

let suankiYil= new Date().getFullYear();

let yas1= suankiYil - parseInt(dogumTarihi1);
let yas2= suankiYil - parseInt(dogumTarihi2);

let ort1= (matNot1_1 + matNot1_2 + matNot1_3) /3;
let ort2=(matNot2_1 + matNot2_2 + matNot2_3) /3;

var basariliMi1=(ort1 >=50);
var basariliMi2=(ort2 >=50);

console.log(basariliMi1);
console.log(basariliMi2);
let sayilar = [1,5,7,15,3,25];

// for( let i in sayilar) {
//     console.log(sayilar[i]*sayilar[i])
// }
// for(let sayi of sayilar){
//     console.log(sayi*sayi);
// }

// for ( let i in sayilar) {
//     if ( sayilar[i]%5 == 0) {
//         console.log(sayilar[i])
//     }
// }

// let toplam =0;
// for (let i in sayilar) {
//     if (sayilar[i]%2==0) {
//         toplam+=sayilar[i];
//     }
// }
// console.log(toplam);

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

// for ( let i in urunler) {
//     console.log(urunler[i].toUpperCase());
// }
// for (let urun of urunler){
//     console.log(urun.toUpperCase());
// }



// let toplam =0;
// for (let i in urunler) {
//     if (urunler[i].indexOf("samsung") > -1) {
//         toplam++;
//     }
// }
// console.log(toplam);
// let toplam =0;
// for (let urun of urunler) {
//     if (urun.includes("samsung")) {
//         toplam++;
//     }
// }
// console.log(toplam);


let ogrenciler = [
    {"ad":"yiğit", "soyad":"bilgi","notlar": [60,70,80]},
    {"ad":"ada", "soyad":"bilgi","notlar": [80,70,80]},
    {"ad":"irem", "soyad":"turan","notlar": [70,70,60]}
];

let ort = [];
for (let i = 0;i<ogrenciler.length; i++) {
    ort[i] =(ogrenciler[i].notlar[0] + ogrenciler[i].notlar[1] + ogrenciler[i].notlar[2]) /3;
    console.log(ort[i].toFixed(1));

    if (ort[i] >=50) {
        console.log(ogrenciler[i].ad +" " + ogrenciler[i].soyad +" = sınavdan gecti");
    }
    else {
        console.log(ogrenciler[i].ad +" " + ogrenciler[i].soyad +" =sınavdan kaldı");
    }
}


for (let ogrenci of ogrenciler) {
    let toplam_not =0;
    let adet =0;
    let ort = 0;
    for (let not of ogrenci.notlar) {
        toplam_not+=not;
        adet++;
    }
    ort =toplam_not / adet;
    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencinin not ortalamsi= ${ort.toFixed(1)}`);
    if (ort >=50) {
        console.log("basarili");
    }else {
        console.log("basarisiz");
    }
}






// Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonks
function kelimeYaz(kelime,adet) {
    for (let i =0; i< adet;i++) {
        console.log(kelime);
    }
}
kelimeYaz("hiii", 4);

// Dikdortgenin alan ve cevresini hesaplayan fonks
function dikdortgenAlanHesapla( kisaKenar, uzunKenar) {
    let alan=0;
    alan= kisaKenar*uzunKenar;
    console.log(alan);
}
function dikdortgenCevreHesapla (kisaKenar,uzunKenar) {
    let cevre=0;
    cevre= (kisaKenar+uzunKenar)*2;
    console.log(cevre);
}
dikdortgenAlanHesapla(4,12);
dikdortgenCevreHesapla(8,2);


// yazi tura uygulamasini fonks kullanarak yap
function yaziTura(karar) {
    let olasilik = ["yazi", "tura"];
    if( karar ==olasilik[Math.random()*1]) {
        console.log("kazandın");
    }else {
        console.log("kaybettin");
    }
}
yaziTura("yazi");

//kendisine gonderilen bir sayinin tam bolenlerini dizi seklinde donduren fonksiyonu yaziniz.

function tamBolenler(sayi){
    let sayilar=[];

    for(i=2;i<sayi;i++){
        if(sayi%i==0){
            sayilar.push(i);
        }
    }
    return sayilar;
}

console.log(tamBolenler(22));

//degisken sayida parametre alan toplam isminde bir fonksiyon tanimlayiniz

function toplam(a,b){
    return a+b+c;
}
console.log(toplam(2,5));
console.log(toplam(2,5,7));  //hata almazsin ama son sayiyi es gecer

function toplam_3(a,b,c){
    return a+b+c;
}
console.log(toplam_3(2,5,7));
console.log(toplam_3(2,5));   //NaN hatasi verir
let kullaniciA = {
    "ad":"İrem",
    "soyad":"Kabil",
    "yas": 20,
    "adres": {
        "sehir":"Sakarya",
        "ilce":"Adapazarı"
    },
    "hobiler":["kitap","müzik"]
}
let kullaniciB = {
    "ad":"İlay",
    "soyad":"Kabil",
    "yas": 24,
    "adres": {
        "sehir":"Sakarya",
        "ilce":"Arifiye"
    },
    "hobiler":["spor","film"]
}

let sonuc;

sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA["yas"];
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0];
sonuc = kullaniciA.hobiler[1];


let kullanicilar = [
    kullaniciA,
    kullaniciB
]

sonuc = kullanicilar[1];
sonuc = kullanicilar[1].adres.ilce;

let urunler = [
    {
        "urun_adi":"samsung s22",
        "urun_fiyat":12000
    },
    {
        "urun_adi":"samsung s23",
        "urun_fiyat":15000
    }
]

sonuc = urunler[0].urun_fiyat;

console.log(sonuc);



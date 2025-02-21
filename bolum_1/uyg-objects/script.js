
let siparis_1 = {
    "id":101,
    "tarih":"31.12.2022",
    "ödeme":"kredi kartı",
    "adres": {
        "mah": "Yahya Kaptan mah.",
        "il": "Kocaeli",
        "ilçe": "İzmit"
    },
    "urunler":[
        {
            "urun_id": 5,
            "urun_baslik": "IPhone 13 Pro",
            "urun_url": "http://abc.com/iphone-13-pro",
            "urun_fiyat": 22000
        },
        {
            "urun_id":6,
            "urun_baslik":"IPhone 13 Pro Max",
            "urun_url":"http://abc.com/iphone-13-pro-max",
            "urun_fiyat":25000
        }
    ],
    "musteri_id": 11,
    "firma_id":34,
    "firma_ad":"Apple Türkiye"
};

let siparis_2 = {
    "id":102,
    "tarih":"30.12.2022",
    "ödeme":"kredi kartı",
    "adres": {
        "mah":"Yahya Kaptan mah.",
        "il":"Kocaeli",
        "ilçe":"İzmit"
    },
    "urunler": [
        {
            "urun_id":6,
            "urun_baslik":"IPhone 13 Pro Max",
            "urun_url":"http://abc.com/iphone-13-pro-max",
            "urun_fiyat":25000
        }
    ],     
    "musteri_id": 12,
    "firma_id":34,
    "firma_ad":"Apple Türkiye"

};

let siparis1_toplam = (siparis_1.urunler[0].urun_fiyat + siparis_1.urunler[1].urun_fiyat) * 1.18;
let siparis2_toplam = (siparis_2.urunler[0].urun_fiyat)*1.18;

let toplam_siparis = siparis1_toplam + siparis2_toplam;



console.log(siparis1_toplam);




let sayilar = [1,4,5,8,4,3,12,5,3,5];

let toplam = 0;

// for (let i=0; i < sayilar.length; i++) {
//     toplam +=sayilar[i];
// }

// for ( let i in sayilar ) {
//     toplam += sayilar[i];
// }

for (let sayi of sayilar) {
    toplam+=sayi;
}
console.log(toplam);

let user = {
    "name":"İrem",
    "surname":"Soyad",
    "password":"12345",
    "email":"info@iremkabil.com"
};

for(let key in user) {
    console.log(key);
    console.log(user[key]);
}


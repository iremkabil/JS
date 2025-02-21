let ogrenciler = ["irem","dogi","zeko"];

sonuc = ogrenciler.length;

// array to string
sonuc = ogrenciler.toString();  // araya virgul ekler
sonuc = ogrenciler.join(" ");   // araya ekler

// eleman silme
//sonuc = ogrenciler.pop();      // son eleman silinir ve deger dondurulur
//sonuc = ogrenciler.shift();    // ilk eleman silinir


// eleman ekleme
//sonuc = ogrenciler.push("piyasaci");    // dizinin sonuna eleman eklenir.
//sonuc = ogrenciler.unshift("piyasaci"); //

let markalar1 = ["mazda","toyota"];
let markalar2 = ["opel","renault"];
let markalar3 = ["mercedes"];

//sonuc = markalar1.concat(markalar2,markalar3);  //markalar1 i etkilemez
//1.dizide 0'dan baslar 1 eleman siler yerine ikinci diziyi ekler (dizi halinde)
// sonuc = markalar1.splice(0, 1, markalar2);  

sonuc = markalar1.splice(0, 1, "bmw","audi");
sonuc = markalar1.sort();    //a'dan z'ye siralar
sonuc = markalar1.reverse();    //z'den a'ya siralar



console.log(sonuc);
console.log(markalar1);

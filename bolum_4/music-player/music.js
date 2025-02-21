class Music {
  constructor(title, singer, img, file) {
    this.title  = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("Pençe", "Melike Şahin","pence.jpg","pence.mp3" ),
  new Music("Kahve Ve Meletonin", "Şirin Soysal","kahveVeMeletonin.jpeg","kahveVeMeletonin.mp3" ),
  new Music("Hayat Garip", "Ozbi ","hayatGarip.jpeg","hayatGarip.mp3" )
];
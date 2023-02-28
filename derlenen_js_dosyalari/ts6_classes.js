"use strict";
class anasayfa {
    ozellikleri_yazdir() {
        return `Bu kişinin yaşı ${this.yas}, boyu ${this.boy}, kilosu ise ${this.kilo}'dur`;
    }
    constructor(yas, boy, kilo) {
        this.yas = yas;
        this.boy = boy;
        this.kilo = kilo;
    }
}
class okul_calisani extends anasayfa {
    constructor(yas, boy, kilo) {
        super(yas, boy, kilo);
    }
}
class ogrenci extends anasayfa {
    constructor(yas, boy, kilo, vize, final) {
        super(yas, boy, kilo);
        this.vize = vize;
        this.final = final;
    }
    ozellikleri_yazdir() {
        this.ortalama = (this.vize * 0.40) + (this.final * 0.60);
        return `Bu kişinin yaşı ${this.yas}, boyu ${this.boy}, kilosu ise ${this.kilo}'dur
        ayrıca bu kişi bir ögrencidir ve ortaması ${this.ortalama} olarak bulunmuştur`;
    }
}
class ogretmen extends anasayfa {
    constructor(yas, boy, kilo, brans, kurum) {
        super(yas, boy, kilo);
        this.brans = brans;
        this.kurum = kurum;
    }
    ozellikleri_yazdir() {
        return `Bu kişinin yaşı ${this.yas}, boyu ${this.boy}, kilosu ise ${this.kilo}'dur
        ayrıca bu kişi ${this.kurum} isimli kurumun ${this.brans} bölümünde öğretim veren bir öğretmendir`;
    }
}
const calisan1 = new okul_calisani(32, 1.77, 75);
console.log(calisan1.ozellikleri_yazdir());
const ogrenci1 = new ogrenci(32, 1.77, 75, 88, 94);
console.log(ogrenci1.ozellikleri_yazdir());
const ogretmen1 = new ogretmen(32, 1.77, 75, "Bilgisayar Programcılığı", "Ataşehir Adıgüzel MYO");
console.log(ogretmen1.ozellikleri_yazdir());

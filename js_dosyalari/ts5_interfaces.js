"use strict";
// ! İnterface (arayüz) Kullanımı
const dikdortgen1 = {
    uzunKenar: 40,
    kisaKenar: 20,
    alanhesapla: function () {
        return "uzun kenar: " + this.uzunKenar + " cm, kısa kenar ise " + this.kisaKenar + " cm'dir";
    }
};
console.log(dikdortgen1);
class main {
    constructor(brans, universite, maas) {
        this.brans = brans;
        this.universite = universite;
        this.maas = maas;
    }
}

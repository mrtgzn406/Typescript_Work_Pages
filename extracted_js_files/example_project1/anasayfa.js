"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ortak_ozellik = void 0;
const amerika_1 = require("./amerika");
const ingiltere_1 = require("./ingiltere");
class ortak_ozellik {
    constructor(adi, paraBirimi, populasyon) {
        this.adi = adi;
        this.paraBirimi = paraBirimi;
        this.populasyon = populasyon;
    }
}
exports.ortak_ozellik = ortak_ozellik;
// ! Aşağıdaki şu kodları yorumdan çıkarıp etkin hâle getirdiğimizde Typescript'te bir hata vermiyor ama kodlar javascript'te derlendiğinde javascript dosyası çalışmıyor
let ingiltere1 = new ingiltere_1.ingiltere("Birleşik Krallık", "sterlin", 74564200);
ingiltere1.ekonomisi_neye_bagli();
let amerika1 = new amerika_1.amerika("Amerika Birleşik Devletleri", "ABD Doları", 340500642);
amerika1.ekonomisi_neye_bagli();

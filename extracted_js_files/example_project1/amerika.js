"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.amerika = void 0;
const anasayfa_1 = require("./anasayfa");
class amerika extends anasayfa_1.ortak_ozellik {
    constructor(adi, paraBirimi, populasyon) {
        super(adi, paraBirimi, populasyon);
        this.eyaletler = ["ohio", "new york", "washington"];
    }
    ekonomisi_neye_bagli() {
        console.log(`ABD ekonomisi çoğunlukla hizmet sektörüne bağlıdır.`);
    }
    ozellikleri_getir() {
        console.log(`ABD'nin resmi adı ${this.adi}, para birimi ${this.paraBirimi}, nüfusu ise ${this.populasyon} kişidir`);
    }
}
exports.amerika = amerika;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingiltere = void 0;
const anasayfa_1 = require("./anasayfa");
class ingiltere extends anasayfa_1.ortak_ozellik {
    ozellikleri_getir() {
        console.log(`İngiltere'nin resmi adı ${this.adi}, para birimi ${this.paraBirimi}, nüfusu ise ${this.populasyon}`);
    }
    ekonomisi_neye_bagli() {
        console.log("İngiltere ekonomisi çoğunlukla hizmet sektörüne bağlıdır");
    }
}
exports.ingiltere = ingiltere;

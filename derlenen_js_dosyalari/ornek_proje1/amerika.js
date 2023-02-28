"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.amerika = void 0;
const anasayfa_1 = require("./anasayfa");
class amerika extends anasayfa_1.ortak_ozellik {
    constructor() {
        super(...arguments);
        this.eyaletler = ["ohio", "new york", "washington"];
    }
    ekonomisi_neye_bagli() {
        console.log(`ABD'nin resmi adı ${this.adi}, para birimi ${this.paraBirimi}, nüfusu ise ${this.populasyon}`);
        console.log(...(this.eyaletler));
    }
}
exports.amerika = amerika;

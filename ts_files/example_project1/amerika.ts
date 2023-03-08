import { ortak_ozellik } from "./anasayfa";


export class amerika extends ortak_ozellik{

    constructor(adi: string, paraBirimi: string, populasyon: number) {
        super(adi, paraBirimi, populasyon);
    }

    eyaletler: string[] = ["ohio", "new york", "washington"];

    ekonomisi_neye_bagli() {
        
        console.log(`ABD ekonomisi çoğunlukla hizmet sektörüne bağlıdır.`);
        
    }
    ozellikleri_getir() {
        console.log(`ABD'nin resmi adı ${this.adi}, para birimi ${this.paraBirimi}, nüfusu ise ${this.populasyon} kişidir`);
        
    }

}
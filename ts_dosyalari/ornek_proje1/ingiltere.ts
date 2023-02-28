import { ortak_ozellik } from "./anasayfa";


export class ingiltere extends ortak_ozellik{
    constructor(adi: string, paraBirimi: string, populasyon: number) {
        super(adi, paraBirimi, populasyon);
    }
    ozellikleri_getir() {
        
        console.log(`İngiltere'nin resmi adı ${this.adi}, para birimi ${this.paraBirimi}, nüfusu ise ${this.populasyon}`);
        
    }

    ekonomisi_neye_bagli() {
        console.log("İngiltere ekonomisi çoğunlukla hizmet sektörüne bağlıdır");
        
    }

}
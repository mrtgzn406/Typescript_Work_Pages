
import { amerika } from "./amerika";
import { arayuz } from "./arayuz";
import { ingiltere } from "./ingiltere";

export abstract class ortak_ozellik implements arayuz{
    adi: string;
    paraBirimi: string;
    populasyon: number;

    constructor(adi: string, paraBirimi: string, populasyon: number) {
        this.adi = adi;
        this.paraBirimi = paraBirimi;
        this.populasyon = populasyon;
    }
    abstract ozellikleri_getir():any;
    abstract ekonomisi_neye_bagli(): any;
}

// ! Aşağıdaki şu kodları yorumdan çıkarıp etkin hâle getirdiğimizde Typescript'te bir hata vermiyor ama kodlar javascript'te derlendiğinde javascript dosyası çalışmıyor

let ingiltere1 = new ingiltere("Birleşik Krallık", "sterlin", 74564200);
ingiltere1.ekonomisi_neye_bagli();

let amerika1 = new amerika("Amerika Birleşik Devletleri", "ABD Doları", 340500642);
amerika1.ekonomisi_neye_bagli();



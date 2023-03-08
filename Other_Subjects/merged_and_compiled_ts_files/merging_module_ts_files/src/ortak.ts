import { teacher } from "./ogretmen";
export {common };

class common{

    ad: string;
    soyad: string;
    constructor(isim : string, soyisim:string){
        this.ad = isim;
        this.soyad = soyisim;

        console.log(`Bu kişinin ismi ${isim} soyismi ${soyisim}'dir`);
        
    }
    
}
let murat = new teacher("murat", "gözen");

murat.yazdir();

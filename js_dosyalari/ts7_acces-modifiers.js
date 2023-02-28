"use strict";
// ! Erişim Belirleyiciler (Access Modifiers)
// todo Bu sayfada biz "public", "private", "protected" gibi erişim belirleyicilerinin ne işe yaradığını anlatacağız.  Bunu anlatabilmek için önce sayfayı 3 kısme bölümlendireceğiz. Bu bölümler sırasıyla public, private ve protected  erişim belirleyicileri için olacak. Her bölümde biz "ortak" isimli bir class'a ve ona "extends" anahtar kelimesi (keyword) ile bağlanan "telefon" ve "bisiklet" class'lara sahip olacağız. Anlatımı bu bölümler üzerinden yapacağız, her bölüm sadece bir erişim belirleyicisiini anlatacak.
// Aşağıdaki örneklerde public, private ve protected keyword'leri constructor'lara atanmıştır.
// --------------------------------------------------------------------------------------
//  ! 1.)  public Erişim Belirleyicisi
class ortak {
    constructor(Adi, Kodu, Fiyati) {
        // public keyword'ünü buraya verdik
        this.urunAdi = Adi;
        this.urunKodu = Kodu;
        this.urunFiyat = Fiyati;
    }
}
class telefon extends ortak {
}
class bisiklet extends ortak {
}
const murat = new telefon("Iphone", "AC5846YU", 10000);
// todo "public" keyword'ü class içinde, class'ın herhangi bir elemanının, metodunun önüne yazılır ve onu herkese açık yapar. Yani bir public ile tanımlanmış bir class özelliğini hem class'ın kendisi içerisinde hem class'tan türemiş sayfalarda hem de class'ın dışında kullanabiliriz.
// ! Bu zaten varsayılan olarak typescript'te class özelliklerinin (properties) sahip olduğu erişim belirleyicidir.
// --------------------------------------------------------------------------------------
//  ! 2.)  protected Erişim Belirleyicisi
class ortak2 {
    constructor(Adi, Kodu, Fiyati) {
        // protected keyword'ünü buraya verdik
        this.urunAdi = Adi;
        this.urunKodu = Kodu;
        this.urunFiyat = Fiyati;
    }
}
class telefon2 extends ortak2 {
}
class bisiklet2 extends ortak2 {
}
const murat2 = new telefon2("Iphone", "AC5846YU", 10000);
// burada hata verdi çünkü biz protected ile tanımlanmış class'ın özelliğine dışarıdan erişmeye çalıştık.
// todo "protected" keyword'ü class içinde, class'ın herhangi bir elemanının, metodunun önüne yazılır ve o class özelliklerini sadece ilgili class içinde ve o class'tan türetilmiş  alt class'ları (subclass) içinde erişilebilir yapar, artık o class'ın herhangi bir özelliğine dışarıdan erişilemez.
// --------------------------------------------------------------------------------------
//  ! 3.)  private Erişim Belirleyicisi
class ortak3 {
    constructor(Adi, Kodu, Fiyati) {
        // private keyword'ünü buraya verdik
        this.urunAdi = Adi;
        this.urunKodu = Kodu;
        this.urunFiyat = Fiyati;
    }
}
class telefon3 extends ortak3 {
}
class bisiklet3 extends ortak3 {
}
const murat = new telefon3("Iphone", "AC5846YU", 10000);
// burada hata verdi çünkü biz private ile tanımlanmış class'ın özelliğine dışarıdan erişmeye çalıştık.
// todo "private" keyword'ü class içinde, class'ın herhangi bir elemanının, metodunun önüne yazılır ve onu kapalı yapar, yani private ile tanımlanmış bir class özelliğine sadece o class'ın kendi içerisinden erişilebilir. Bunun dışında private özelliklere dışarıdan da, o  class'tan türetilmiş  alt class'lar (subclass) içinden de erişilemez.

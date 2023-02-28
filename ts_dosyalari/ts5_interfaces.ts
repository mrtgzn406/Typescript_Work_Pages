
// ! İnterface (arayüz) Kullanımı

interface dikdortgen{
    uzunKenar :number;
    kisaKenar :number;
    alanhesapla():void;
}

const dikdortgen1: dikdortgen = {
    uzunKenar : 40,
    kisaKenar : 20,
    alanhesapla: function(){
        return "uzun kenar: " + this.uzunKenar + " cm, kısa kenar ise " + this.kisaKenar+ " cm'dir";
    }
}

console.log(dikdortgen1);

// todo Bu örnekte biz dikdortgen isminde bir "interface" tanımladık ve ona 2 tane key-value çifti yazdık. ardından aşağıda "dikdortgen1" isminde bir nesne tanımladım ve o nesnenin veri tipine interface ismini yazdık. böylelikle interface içinde yer alan key-value çiftlerini "dikdortgen1" isimli nesne kullanmak zorunda kaldı.

// -------------------------------------------------------------------------------------

// todo İnterface'lerin kullanım amacı şudur: İnterface'ler bir tür sözleşme gibidirler, nasıl ki gerçek dünyada anlaşmalı kurumları ilgilendiren ve herkesin uyması gereken sözleşmeler varsa ve herkes o sözleşmelerin maddelerine harfiyen uyuyorlarsa, işte interface'ler de buna benzer. Çünkü interface tanımlandıktan sonra içine bazı özellikler ve metotlar (fonksiyonlar) yazılır, eğet o interface bir class'a "implements" keyword'ü ile bağlanırsa, ona bağlanan class interface içindeki bütün metotları ve özellikleri kendi içinde tekrar tanımlamak zorundadır. Bir interface'i bir class'a bağlamanın tek yolu onu aşağıdaki gibi "implements" keyword'ü ile class'a bağlamaktır.  İnterface'e bağlanan class, interface içinde bütün metotları override ederek (yani o metodu ezerek) kullanmak zorundadır ve bu sefer interface içinde gövdesiz tanımladığımız metodu class'ta gövdeli olarak kullanmak durumunda kalırız. 


interface ogretmen {
    brans : string;
    universite : string;
    maas : number;
    bilgileriGetir():void;
    
}

abstract class main implements ogretmen {
    // todo Eğer bir class'ın önüne "abstract" keyword'ünü koyarsak o class da abstract class (soyut sınıf) olur ve onu da aynı interface gibi kullanabiliriz. Ayrıca soyut sınıflar (abstract class) içine interface'den farklı olarak "constructor" da tanımlayabiliriz, oysaki constructor tanımlama işini biz interface içinde yapamıyorduk. Zaten constructor denilen yapı da bir tek class'larda oluşturulabilen bir şeydir.

    //! Not: eğer class'ı "abstract class" olarak tanımlarsak interface'den alınan metodu da gövdesiz kullanabiliriz, lakin o metodun isminin önüne de "abstract" yazmak gerekir.

    brans: string;
    universite: string;
    maas: number;

    constructor(brans: string, universite: string, maas: number) {
        this.brans = brans;
        this.universite = universite;
        this.maas = maas;
    }       
    abstract bilgileriGetir(): void ;
    // ! işte burada metodu gövdesiz kullanmak için önüne "abstract" yazdık.
}

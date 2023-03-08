
function yazdir (isim: string, soyisim: string, yas: number, gectiMi: boolean): string{

    return `Bu şahsın ismi ${isim}, soyismi ${soyisim}, yaşı ${yas}'dir ve sınıfı ${gectiMi == true ? "geçmiştir" : "geçememiştir"}`;
}

console.log(yazdir("aygül", "nazlı", 46, false));

// todo Typescript'te fonksiyon tanımlaması yaparken onların parametrelerine veri tipi atayabiliriz. 
// --------------------------------------------------------------------------------------



function notHesapla (vize: number, final: number ):void{ // burada veri tipi olarak void yazdık, yani geriye bir değer döndürülmüyor

    let ortalama: number = (vize * 0.40) + (final * 0.60);
    
    console.log(`Bu kişinin not ortalaması: ${ortalama}`);
    
}

notHesapla(84, 97);

// todo Typescript'te fonksiyon başlığından hemen sonra ": void " şeklinde yazdığımız ifade ise fonksiyonun geriye hangi veri tipinde değer döndüreceğini belirtir.

// --------------------------------------------------------------------------------------

function notHesapla2 (vize: number, final: number, disiplinCezasi?: boolean) { // burada disiplinCezasi isimli parametre opsiyoneldir
    
    let ortalama: number = (vize * 0.40) + (final * 0.60);
    
    if (disiplinCezasi == true) {
        // Bu kısım disiplinCezası isimli parametre için bir değer yazılmışsa ve o değer true ise, yani kişinin disiplin kaydı varsa çalıştırılacak komutlardır
        console.log("disiplin cezasından dolayı dersten kaldınız");
    } 
    else if(disiplinCezasi == false){
        // Bu kısım disiplinCezası isimli parametre için bir değer yazılmışsa ve o değer false ise, yani kişinin disiplin kaydı yoksa çalıştırılacak komutlardır
        if (ortalama >= 60) {
            console.log("disiplin kaydınız olmadığı için ve ortalamanız 60 veya yukarısında olduğu için dersi geçtiniz");   
        }
        else {
            console.log("not ortalamanız 60'tan daha aşağıda olduğundan dersten kaldınız");
        }
        
    }
    else {
        // Bu kısım ise disiplinCezası isimli parametre için bir değer yazılmamışsa çalıştırılacak komutlardır

        if (ortalama >= 60) {
            console.log("disiplin kaydınız olmadığı için ve ortalamanız 60 veya yukarısında olduğu için dersi geçtiniz");
            
        }
        else {
            console.log("not ortalamanız 60'tan daha aşağıda olduğundan dersten kaldınız");
            
        }
    }
}

notHesapla2(48 , 64, false); // burada opsiyonel olan "disiplinCezasi?: boolean" parametresi için değer yazdık

notHesapla2(84, 94);         // burada ise opsiyonel "disiplinCezasi?: boolean" parametresi için değer yazmadık


// todo Typescript'in fonksiyon başlığındaki formal parametrelerini zorunlu veya isteğe bağlı (opsiyonel) yapabiliyoruz. Normal şartlarda parametre yazılırsa bu o formal parametre için gerçek parametreye değer girilmesini zorunlu kılar. Fakat eğer biz parametre isminin hemen yanına bir "?"" işareti koyarsak, bu o parametrenin opsiyonel olduğunu, o parametre için değer yazıp yazmama konusunda serbest olduğumuzu ifade eder. 

// ! Not: Eğer fonksiyon başlığında opsiyonel parametre tanımlayacaksak, o opsiyonel parametreler zorunlu parametrelerden sonra yazılmalıdır. Ayrıca opsiyonel parametrelere varsayılan değer atanamaz.

// --------------------------------------------------------------------------------------

function kisi_bilgisi ( kisi:{ ad: string, soyad: string, yas: number } ){

        console.log(`Bu kişinin adı ${kisi.ad}, soyadı ${kisi.soyad} ve ${kisi.yas} yaşındadır`);
        
}

let kisi1 = {
    ad: "murat",
    soyad: "gözen",
    yas: 25
}

kisi_bilgisi(kisi1);


// todo Typescript'te fonksiyonlara parametre değeri olarak bir nesneyi ve onun property'lerini tanımlayabiliriz. Eğer bu şekilde bir tanımlama yaparsak formal parametre içine yazdığımız nesnenin key-value  değerleri gerçek parametre içine yazılanlarla eşleşmek zorundadır. Eşleşmekten kasıt ise şudur: "key" değerleri aynen yazılmak zorundadır, "value" kısmına ise fonksiyon başlığında tanımlanan veri tiplerine uygun değerler yazılmalıdır.

/* key değerinin aynen yazılmamasına bir örnek ; 
let deneme1 = {
    ad: "ahmet",
    soyad: "hayat",
    omur : 97
} 
işte biz bu nesneyi yukarıdaki kisi_bilgisi(); isimli fonksiyona yazamayız çünkü fonksiyon başlığında bizden istenen "yas" key'i bu nesnede yoktur, o yüzden hata verir.


value kısmındaki veri tipinin fonksiyondaki formal parametre ile uyuşmamasına bir örnek 
let deneme2 = {
    ad: "ahmet",
    soyad: "hayat",
    yas : "97"
}
bu nesneyi de yukarıdaki kisi_bilgisi(); isimli fonksiyonun gerçek parametresine yazamayız çünkü yas özelliğinin "value" kısmındaki değer string ifadesiyle "97" olarak girilmiştir, oysaki kisi_bilgisi(); bunun number veri tipinde girilmesini istiyordu, o yüzden hata verir. 
 */

// ! Not: Lakin eğer bir nesne çok fazla özelliğe (property) sahipse o zaman artık o nesne böyle fonksiyon parametresi olarak yazılamaz hâle gelir, böyle yazılması kontroü zorlaştırır. Bu durumda artık fonksiyonun içine nesne yazmayız, bunun yerine interface'leri kullanırız.
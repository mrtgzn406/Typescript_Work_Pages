"use strict";
// ! Genel Bilgilendirme
/* Bu sayfada Typescript'teki veri tiplerini göreceğiz. Bildiğimiz üzere javascript aynı C# gibi, java gibi kontrollü bir dil değildi, yani değişken tanımladığımız zaman onun veritipini yazmıyorduk, javascript o değişken hangi türde bir değere sahipse kendi veri tipini o değere göre ayarlıyordu.

Kısacası javascript'te değişkenlerin veri tipi yoktu, o değişkenlerin sahip olduğu değerler veri tipini belirliyordu. Mesela biz;

    let ornek;

    ornek = "murat";         // değer string olduğu için , değişken de string veri tipini aldı.
    ornek = 175;             // değer number olduğu için , değişken de number veri tipini aldı.
    ornek = true;            // değer number olduğu için , değişken de number veri tipini aldı.

anlamına geliyordu . Bu da beraberinde bazı sorunları getiriyordu.

Ayrıca javascript dosyaları ancak çalıştırıldıktan sonra hataları gösterebiliyorken, typescript çalıştırmadan önce de (yani derleme aşamasında da)  hataları gösterebiliyor. Bunun dışında typescript, javascript'in hata olarak görmediği ve çalıştırdığı ama aslında hatalı olan kısımları da bize gösteriyor.    */
//---------------------------------------------------------------------------------------------
// ! Temel Bazı Kullanımlar 
let not1 = 87;
not1 = "murat";
// todo mesela bu örnekte biz bir değişkene önce bir sayı verdik ve veritipi number oldu, sonra bu sayı verdiğimiz değişkene aşağı satırda bir string verdik ve bu yüzden typescript bir hata çıkardı ve  "sayı veritipine string atanamaz" dedi. 
let deger1;
deger1 = 74;
deger1 = "Splinter Cell: The Blacklist";
deger1 = false;
// todo lakin eğer bu şekilde let veya var anahtar kelimesi ile bir değişkeni değer atamadan tanımlarsak bu değişkenin veri tipi "any" olur ve böylelikle ona sonradan istediğimiz değeri atayabiliriz, bu typescript'te bir hata çıkartmaz.
//---------------------------------------------------------------------------------------------
// ! İlkel Veri Tiplerini Tanımlama
let a; // sadece sayı atanabilir
let b; // sadece metin atanabilir
let c; // sadece boolean değer atanabilir
let d; // herhangi bir değer atanabilir
let e; // herhangi bir değer atanabilir ama ondan constructor oluşturulamaz, ona atanan değer ne olursa olsun o değerin veri tipi ile ilgili metotlara, özelliklere ulaşamaz.
// todo burada biz değişkenlerin veritipini, ilkel veri tipleri ile (primitive data types) baştan tanımladık. Bunu yapmak için değişken isminden  sonra : konur ve ve veritipi yazılır. Böylece bu değişkenlere atadığımız bu veri tiplerinin kapsamı dışında bir değer yazılamaz, yazılırsa hata verir.
//todo Not: "any" veri tipi isminden de anlaşılacağı üzere İngilizce'de "herhangi" demektir. Yani any veri tipine sahip olan bir değişkene her türlü değer atanabilir.
//---------------------------------------------------------------------------------------------
// ! Dizilere Veri Tipi Atama
let sayiDizisi1 = [15, 84, 95, "abdullah bin ubey"];
let sayiDizisi2 = [946, 854, 61, 8];
let stringDizisi1 = ["ali", "ömer", 'ebu bekir', "osman"];
let stringDizisi2 = ["talha", 'zübeyr', "elyesa", "zekeriya"];
let booleanDizis1 = [true, false];
let booleanDizisi2 = [false, true];
let anyDizisi1 = [549, "yalçın kara", true];
let anyDizisi2 = ["harun çiftçi", false, true, "ahmet", 875];
// todo İşte typescript'te veri tipleriyle dizi tanımlaması ise böyle olur. Bu şekide diziyi belirli bir veri tipi ile tanımladığımızda diziye o veri tipi dışında başka bir değer atanamaz, atanırsa hata verir. Fakat dosyayo derlersek bu hatalı haliyle yine dosya javascript dosyasına çevrilir.
//---------------------------------------------------------------------------------------------
// ! Dizileri Veri Tipleriyle Koşullu Olarak Tanımlama
let dizi1 = ["muhammed", true, "matematik", 949];
// todo Typescript'te dizileri bu şekilde koşullu tanımladığımız zaman typescript'e şunu söylemiş oluyoruz:
/*  1) Bu dizinin toplamda 4 elemanı olacak.
2) Bu dizinin 4 elemanının veri tipi sırasıyla string, boolean, string ve number veri tipinde olacak.
3) Bu dizinin veri tipi sırası değişemez, önce hangi veri tipi yazıldıysa ona uygun değer yazılmalıdır.
4.) Yukarıdaki ilk 3 madde değiştirilemez, değiştirilmesi teklif dahi edilemez :D (BU MADDE ŞAKA İÇİNDİ )
*/
//---------------------------------------------------------------------------------------------
// ! Değişkenleri Çoklu Veri Tipiyle Tanımlama
let ikili_tip = "murat";
ikili_tip = true;
ikili_tip = 84;
// todo Eğer typescript'te bir değişkene birden fazla veri tipi atamak istersek , onun için de yukarıdaki şekilde tanımlama yaparız. Böylelikle sadece tanımladığımız o iki veri tipi atanabilir.

let message = "Kudüs";
message.length;


let deneme: number = 10;
deneme.toPrecision(12);

// todo Typescript'te bir değişkene baştan veya sonradan bir değer ataması yaptığınızda o değişkenin ver tipini belirlediğiniz için , ilgili veri tipiyle alakalı tüm metotları ve özellikleri kullanabiliyorsunuz ve intellisense  de bunları sizin için tahmin ediyor.

//---------------------------------------------------------------------------------------------
// ! Tip Dönüşümlerini Yapmak

const ornek1: boolean = true;

(<string>ornek1).toUpperCase();
(ornek1 as string).toUpperCase();

const ornek2: number = 850;
(<string>ornek2).toUpperCase();
(ornek2 as string).toUpperCase();

const ornek3: string = "67";

(<number>ornek3).toPrecision(9);
(ornek3 as number).toPrecision(9);

// todo Typescript'te normalde number, booelan ve string veri tipleri birbirine tip dönüşümü (type casting) ile dönüştürülemez. Eğer biz değişkenlerin veri tipini sonradan değiştireceksek, o değişkenleri "unknown" veri tipi ile tanımlamalıyız. Bu sayede tip dönüşümünü yapabiliriz.Aşağıdaki örnekte ise bunu gösterdik

// ! Not: Aşağıdaki örnek yukarıdakinin aynısıdır. Sadece değişkenlerin ismi değiştirilmiştir ve değişkenler, string, boolean, number veya any tipinde değil "unknown" tipinde tanımlanmıştır. Bu sayede tip dönüşümünü yapabildik.


const ornek4: unknown = true;

(<string>ornek4).toUpperCase();
(ornek4 as string).toUpperCase();

const ornek5: unknown = 850;
(<string>ornek5).toUpperCase();
(ornek5 as string).toUpperCase();

const ornek6: unknown = "67";
(<number>ornek6).toPrecision(9);
(ornek6 as number).toPrecision(9);








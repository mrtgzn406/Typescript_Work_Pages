"use strict";
let message = "Kudüs";
message.length;
let deneme = 10;
deneme.toPrecision(12);
// todo Typescript'te bir değişkene baştan veya sonradan bir değer ataması yaptığınızda o değişkenin ver tipini belirlediğiniz için , ilgili veri tipiyle alakalı tüm metotları ve özellikleri kullanabiliyorsunuz ve intellisense  de bunları sizin için tahmin ediyor.
//---------------------------------------------------------------------------------------------
// ! Tip Dönüşümlerini Yapmak
const ornek1 = true;
ornek1.toUpperCase();
ornek1.toUpperCase();
const ornek2 = 850;
ornek2.toUpperCase();
ornek2.toUpperCase();
const ornek3 = "67";
ornek3.toPrecision(9);
ornek3.toPrecision(9);
// todo Typescript'te normalde number, booelan ve string veri tipleri birbirine tip dönüşümü (type casting) ile dönüştürülemez. Eğer biz değişkenlerin veri tipini sonradan değiştireceksek, o değişkenleri "unknown" veri tipi ile tanımlamalıyız. Bu sayede tip dönüşümünü yapabiliriz.Aşağıdaki örnekte ise bunu gösterdik
// ! Not: Aşağıdaki örnek yukarıdakinin aynısıdır. Sadece değişkenlerin ismi değiştirilmiştir ve değişkenler, string, boolean, number veya any tipinde değil "unknown" tipinde tanımlanmıştır. Bu sayede tip dönüşümünü yapabildik.
const ornek4 = true;
ornek4.toUpperCase();
ornek4.toUpperCase();
const ornek5 = 850;
ornek5.toUpperCase();
ornek5.toUpperCase();
const ornek6 = "67";
ornek6.toPrecision(9);
ornek6.toPrecision(9);

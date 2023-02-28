
// ! Değişkenleri Numaralandırma

// const paraYatirma = 1;
// const paraÇekme = 2;
// const paraGonderme = 3;
// const faturaOdeme = 4;

// todo Normalde değişkenler, numaralandırmak için böyle veya buna benzer  şekilde uğraşmamız gerekiyordu. Şimdi ise typescript'in enum class'ı sayesinde , değişkenleri numaralandırabiliyoruz.

//---------------------------------------------------------------------------------------------

enum islem {paraGonderme, paraYatirma, paraCekme, faturaOdeme};

// todo  mesela bu yaptığımız işlemde "islem" isminde bir enum class'ı tanımladık ardından değerleri yazmak için kıvırcık parantezleri oluşturduk ve o parantezlerin içine değişken isimlerini  yazdık. Böylelikle class'ın gövdesi içine yazmış olduğumuz değişkenler soldan sağa sırasıyla 0, 1, 2, 3 numaralandırmasını aldı (bu değerler soldan sağa doğru +1 artarak gider ve 0'dan başlar). 

//---------------------------------------------------------------------------------------------

enum islem2 {paraGonderme , paraYatirma = 14, paraCekme, faturaOdeme, cezaOdeme = 564};



// todo Bu örnekte ise enum class'ı içindeki değişkenlerden birine bir sayı ataması yaptık, bunu yaptığımızda atadığımız sayı o değişkene uygulanır ve o değişkenin sağındaki değişkenler sol tarafındaki değişkenin sahip olduğu numaralandırma neyse, o numarayı +1 artırarak kendisine atar. Kısacası o atadığımız sayı soldan sağa doğru tüm değişkenlere +1 artırılarak atanır. 

// todo Örneğin yukarıdaki örnekte biz 2. değişkene, yani "paraYatirma" değişkenine 14 sayısını atadık. İşte bu atamadan dolayı "paraYatirma" değişkeninin sol tarafındaki "paraGonderme" bundan etkilenmeyip, 0 numaralandırmasını korusa da, "paraYatirma" değişkeninden sonra gelen "paraCekme" değişkeni otomatikmen  15 sayısını aldı, onun da sağındaki "faturaOdeme" değişkeni ise 16 sayısını aldı. Yani "paraYatirma" değişkenine atadığımız değer sağındaki diğer tüm değişkenlerin numaralandırmasını değiştirdi, solundakini değiştirmedi. Lakin sağındakini değiştirme olayı eğer o değişkene bir numara atanmamışsa uygulanır, atanmışsa uygulanmaz. Mesela "cezaOdeme" isimli değişkenin zaten 564 değeri olduğu için onda bir değişiklik olmaz, yoksa o değişkenin değeri de 17 olurdu.

//---------------------------------------------------------------------------------------------

enum iller {istanbul = 34, izmir = 35, ankara = 6 , bursa = 16, kocaeli = (20+21)};
// todo Burada ise görüldüğü üzere illeri bir enum class'ı içine aldık ve hepsine bir numaralandırma verdik.

console.log(iller.istanbul);
console.log(iller[34]);

console.log(iller.ankara);
console.log(iller[6]);

// todo Yukarıda da görüldüğü gibi eğer biz enum class'ı içindeki elemanlara "iller.istanbul", "iller.ankara" şeklinde onun değişken ismiyle erişirsek bu o değişken içindeki sayısal numaralandırmayı geriye döndürür. Yoksa eğer biz değişkenlere , onlara  atanan numara ile erişirsek "iller[6]", "iller[34]" gibi, o zaman da geriye değişken ismi döndürülür.

// todo Ayrıca görüldüğü üzere kocaeli'ye hesaplanmış bir numara ataması yaptık.

//---------------------------------------------------------------------------------------------

enum fakulteler {tıp = "tıp fakültesi", hukuk = "hukuk fakültesi", iktisat = "iktisat fakültesi" };

// todo Eğer enum class'ı içindeki bir elemana string değeri atanırsa, tüm elemanlara string değeri atanmak zorundadır, boolean değeri atanırsa tüm elemanlara boolean değeri atanmak zorundadır. Sayı atanması (numaralandırma) konusu içinse aşağıdaki notu okuyun.

// ? Not : Yukarıda da bahsettiğimiz gibi enum class'ı içinde tanımladığımız elemanlar (veya değişkenler) varsayılan olarak zaten bir numaralandırmaya sahiptir. Dolayısıyla eğer biz elemanlardan herhangi birine başka bir sayı atarsak, enum class'ı içindeki tüm elemanlara değer atamamız gerekmez. Bunun nedenini daha yukarıdaki "Değişkenleri Numaralandırma" kısmında anlatmıştık.
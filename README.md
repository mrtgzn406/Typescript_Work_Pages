# Açıklama

Bu klasörde Javascript dilinin daha fonksiyonel, kullanışlı yazılmasını sağlayan ve bize daha kodumuzu yazarken derleme zamanı hatalarımızı gösteren Typescript dili ile ilgili bilgilendirme yapılacaktır. TypeScript kendi başına bir programlama dili değildir ,o sadece normal Javascript'in daha gelişmiş, genişletilmiş versiyonudur, zaten böyle olduğu için typescript dosyaları içine her türlü javascript kodu yazılabilir çünkü typescript javascript ile tam uyumludur. Typescript'in dosya uzantısı .ts'dir ve direkt olarak .ts uzantılı typescript dosyaları projelere bağlanamaz. Typescript dosyalarından bir transpiler aracılığı ile .js uzantılı dosya üretilir, yani javascript dosyası üretilir ve projeye de bu çıkartılan .js uzantılı javascript dosyası bağlanır, yani typescript dosyalarının kaynak kodu, transpiler ile javascript kaynak koduna dönüştürülür. Velhasıl kelam nasıl ki Sass,Less gibi yazılım teknolojileri bir Css ön işlemcisi (css pre-processor ) ise, typescript dediğimiz teknoloji de bir javascript ön işlemcisi gibidir. Ön işlemciler bildiğimiz üzere bir yazılım teknolojisini normalinden çok daha işlevsel, fonksiyonel kullanmayı sağlar.


Son olarak Typescript , kendi içerisine yazılan kodları javascript'in 2016 yılında yayınlanan sürümündeki kodlara çevirir ve oraya çıkardığı .js uzantılı dosyada bu 2016 sürümünden kalan kodlar olur. Typescript bu işlemi  güncel javascript kodlarının (es 2020, es 2021, es 2022 gibi) her tarayıcıda çalışabilmesi için yapar. Çünkü javascript'in 2016 sürümü tarayıcıların kahir ekseriyeti tarafından desteklenmektedir fakat en güncel javascript sürümleri bazı tarayıcılar kendilerini en güncel javascript sürümüne göre güncellemedği için çalışmayabilir ve bu da uygulamarda istenmeyeyen sonuçlara yol açar. İşte bunun için biz Typescript sayesinde 2022 sürümünde yazdığımız bir javascript kodunu 2015, 2016, 2017 yılında yayınlanmış javascript sürümündeki kodlara çevirebiliyoruz. Çünkü javascript geriye uyumlu olarak çalışan bir dildir, yani javascript ile 2010, 2013, 2015 yılında yazılmış fakat artık kullanılmayan , eskimiş bir kodu bile  bugün kullanabilirsiniz ve kodu kullandığınız için hiçbir sıkıntı yaşamazsınız.

Typescript dosyalarına yazdığımız kodların hangi javascript sürümüne çevrileceğini belirtmek için "tsconfig.json" isimli dosyayı kullanmamız gerekiyor, yine aynı şekilde typescript'in nereye .js uzantılı dosyaları çıkartacağını belirtmek için  ve hangi klasörde bulunan .ts dosyalarının derleyeceği belirtmek için de aynı dosyayı kullanmalıyız.

    Not: Bu "tsconfig.json" dosyasının üretilebilmesi için komut satırını .ts ve .js uzantılı dosyaları bulundurduğumuz klasör yolunda açarız ve komut satırına "tsc --init" yazarız. Böylelikle o dosya ilgili klasör içinde oluşur

//****************************************************************************** */

## Typescript'in bilgisayarımıza kurulumu şu şekildedir: 

    ilk önce biz bilgisayarımıza Typescript kurulumunu yapmak için  Node.js framework'ünün indiririz (LTS versiyonu),
    Link: https://nodejs.org/en/

    Ardından komut satırını açarız ve oraya "npm install global typescript" yazarız. Böylelikle typescript bilgisayarımıza inmiş olur.  

## Typescript'in Temel CLI (command line interface) Komutları 

    npm install -g typescript    // typescript'in çalışması için gerekli paketleri bilgisayarımıza indirir.

    tsc --init                  // tsconfig.json isimli, typescript ile ilgili ayarlamaları yaptığımız konfigürasyon dosyalarını oluşturur.

    tsc                         // klasördeki tüm .ts dosyalarını aynı isimle .js dosyasına derler.           


    tsc deneme1.ts            // ilgili klasörde ismini yazdığımız .ts dosyasını aynı isimle .js dosyasına derler


    tsc --watch, -w             // Mevcut klasördeki tüm .ts dosyalarını izler, izlemekten kasıt şudur: Eğer klasördeki .ts dosyalarında herhangi bir değişiklik yapar ve değişikliği kaydedersek, bunu typescript direkt .js dosyasına derler. Ayrıca izlenen klasördeki herhangi bir .ts dosyasında değişiklik olursa , typescript sadece o dosyayı .js dosyasına derlemez, klasörde bulunan bütün .ts dosyalarını derler.
    Not: Bu komut ilk çalıştırıldığında tüm .ts dosyalarını .js dosyasına direkt derler, ondan sonra izlemeye başlar. 

    tsc --watch deneme1.ts      // Bir .ts dosyasını izlemeyi sağlar.





## Typescript'in Konfigürasyonunu Yaptığımız "tsconfig.json" Dosyasının Kodları

    "target": "ES2016"                  // Typescript dosyalarının derlendiğinde hangi javascript sürümünde çıkartılacağını/oluşturulacağını belirtir.

    "rootDir": "./ts_dosyalari"         // Typescript'in derlemek için hangi klasördeki .ts dosyalarını hedef alacağını belirtir.

        "rootDirs": ["./ts_dosyalari", "./ts_dosjhdoasf2"]  // Eğer birden fazla hedef almak istediğimiz kaynak klasörü varsa kullanılır. Ayrıca bu şekilde çok birden fazla kaynak klasör seçildiğinde .js çıktıları da aynı isimdeki kaynak klasörlerin içinde çıkartılır. 

    "outDir": "./js_dosyalari"          // Typescript'in .js dosyalarını hangi klasöre çıkartacağını belirtir.


## Ekstralar : 

    node deneme1.js           // Bir javascript dosyasını komut satırında çalıştırır ve çıktısı gösterir.



## Typescript'in Tüm Komutlarını Görmek 

    Typescrip'in  komutlarını ve onların açıklaması için komut satırına  "tsc --help" yazarız,
    Typescrip'in tüm komutlarını ve onların açıklaması için ise komut satırına "tsc --help --all" yazarız.




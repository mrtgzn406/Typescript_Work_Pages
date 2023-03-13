# Açıklama

Bu klasörde Javascript dilinin daha fonksiyonel, kullanışlı yazılmasını sağlayan ve bize daha kodumuzu yazarken derleme zamanı hatalarımızı gösteren Typescript dili ile ilgili bilgilendirme yapılacaktır. TypeScript kendi başına bir programlama dili değildir ,o sadece normal Javascript'in daha gelişmiş, genişletilmiş versiyonudur, zaten böyle olduğu için typescript dosyaları içine her türlü javascript kodu yazılabilir çünkü typescript javascript ile tam uyumludur. Typescript'in dosya uzantısı .ts'dir ve direkt olarak .ts uzantılı typescript dosyaları projelere bağlanamaz. Typescript dosyalarından bir transpiler aracılığı ile .js uzantılı dosya üretilir, yani javascript dosyası üretilir ve projeye de bu çıkartılan .js uzantılı javascript dosyası bağlanır, yani typescript dosyalarının kaynak kodu, transpiler ile javascript kaynak koduna dönüştürülür. Velhasıl kelam nasıl ki Sass,Less gibi yazılım teknolojileri bir Css ön işlemcisi (css pre-processor ) ise, typescript dediğimiz teknoloji de bir javascript ön işlemcisi gibidir. Ön işlemciler bildiğimiz üzere bir yazılım teknolojisini normalinden çok daha işlevsel, fonksiyonel kullanmayı sağlar.


Son olarak Typescript , kendi içerisine yazılan kodları javascript'in 2016 yılında yayınlanan sürümündeki kodlara çevirir ve oraya çıkardığı .js uzantılı dosyada bu 2016 sürümünden kalan kodlar olur. Typescript bu işlemi  güncel javascript kodlarının (es 2020, es 2021, es 2022 gibi) her tarayıcıda çalışabilmesi için yapar. Çünkü javascript'in 2016 sürümü tarayıcıların kahir ekseriyeti tarafından desteklenmektedir fakat en güncel javascript sürümleri bazı tarayıcılar kendilerini en güncel javascript sürümüne göre güncellemedği için çalışmayabilir ve bu da uygulamarda istenmeyeyen sonuçlara yol açar. İşte bunun için biz Typescript sayesinde 2022 sürümünde yazdığımız bir javascript kodunu 2015, 2016, 2017 yılında yayınlanmış javascript sürümündeki kodlara çevirebiliyoruz. Çünkü javascript geriye uyumlu olarak çalışan bir dildir, yani javascript ile 2010, 2013, 2015 yılında yazılmış fakat artık kullanılmayan , eskimiş bir kodu bile  bugün kullanabilirsiniz ve kodu kullandığınız için hiçbir sıkıntı yaşamazsınız.

Typescript dosyalarına yazdığımız kodların hangi javascript sürümüne çevrileceğini belirtmek için "tsconfig.json" isimli dosyayı kullanmamız gerekiyor, yine aynı şekilde typescript'in nereye .js uzantılı dosyaları çıkartacağını belirtmek için  ve hangi klasörde bulunan .ts dosyalarının derleyeceği belirtmek için de aynı dosyayı kullanmalıyız. Bu dosyanın nasıl kullanılacağı ile ilgili detaylı bilgiler **'Typescript'in Konfigürasyonunu Yaptığımız "tsconfig.json" Dosyasının Kodları'** isimli başlık altında yazılmıştır.


<hr style= "border-bottom: 5px solid red;">

<br>

## Typescript'in Bilgisayarımıza Kurulumu

    ilk önce biz bilgisayarımıza Typescript kurulumunu yapmak için  Node.js framework'ünün indirmemiz gerek (LTS versiyonu),
    İndirme linki: https://nodejs.org/en/

    Ardından komut satırını açarız ve oraya "npm install global typescript" yazarız. Böylelikle typescript bilgisayarımıza inmiş olur.  

<hr style= "border-bottom: 5px solid yellow;">


## Typescript'in Temel CLI (command line interface) Komutları 

    npm install -g typescript    // typescript'in çalışması için gerekli paketleri bilgisayarımıza indirir.

    tsc --init                  // tsconfig.json isimli, typescript ile ilgili ayarlamaları yaptığımız konfigürasyon dosyalarını oluşturur.

    tsc                         // klasördeki tüm .ts dosyalarını aynı isimle .js dosyasına derler.           


    tsc deneme1.ts            // ilgili klasörde ismini yazdığımız .ts dosyasını aynı isimle .js dosyasına derler


    tsc --watch            // Mevcut klasördeki tüm .ts dosyalarını izler, izlemekten kasıt şudur: Eğer klasördeki .ts dosyalarında herhangi bir değişiklik yapar ve değişikliği kaydedersek o typescript dosyası direkt javascript dosyasına derlenir.
    Not: Bu komut ilk çalıştırıldığında tüm .ts dosyalarını .js dosyasına direkt derler, ondan sonra izlemeye başlar. 

    tsc --watch deneme1.ts      // Bir .ts dosyasını izlemeyi sağlar.



<hr style= "border-bottom: 5px solid red;">

<br>

## Typescript'in Konfigürasyonunu Yaptığımız "tsconfig.json" Dosyasının Kodları ve Önemli Notlar

Bu "tsconfig.json" dosyasının üretilebilmesi için komut satırını .ts uzantılı dosyaları bulundurduğumuz klasör yolunda açarız ve komut satırına "tsc --init" yazarız. Böylelikle o dosya ilgili klasör içinde oluşur. İşte bu tsconfig.json dosyası varsayılan olarak o klasörde typescript dosyalarının nasıl derleneceğini ayarlar. Örneğin bu tsconfig.json dosyasının kodlarıyla bazı ayarlamalar yapmışsak ve daha sonra bambaşka bir klasöre geçip orada typescript dosyalarıyla çalışıyorsak, bu tsconfig.json dosyasındaki ayarlar o klasöre etki etmez. O klasör için de yine "tsc --init" yazıp tsconfig.json dosyasını o klasör için de oluşturmalıyız, aksi halde typescript dosyaları derlenemez.

### "tsconfig.json" Dosyasındaki Bazı Önemli Yapılandırma Ayarları

    "target": "ES2016"                  // Typescript dosyalarının derlendiğinde hangi javascript sürümünde çıkartılacağını/oluşturulacağını belirtir.

    "rootDir": "./ts_dosyalari"         // Typescript'in derlemek için hangi klasördeki .ts dosyalarını hedef alacağını belirtir.

        "rootDirs": ["ts_dosyalari", "not_hesapla"]  // Eğer birden fazla hedef almak istediğimiz kaynak klasörü varsa kullanılır. Ayrıca bu şekilde çok birden fazla kaynak klasör seçildiğinde .js çıktıları da aynı isimdeki kaynak klasörlerin içinde çıkartılır. 

    "outDir": "./js_dosyalari"          // Typescript'in .js dosyalarını hangi klasöre çıkartacağını belirtir.


<hr style= "border-bottom: 5px solid yellow;">

### Typescript Dosyalarını Belirli Bir Klasöre Derlemek

Diyelim ki bizim "My_New_Site" isimli bir çalışma klasörümümüz var ve bu klasör bizim en genel klasörümüz, diğer klasörleri ve dosyaları kapsayan bir klasör. Eğer bu genel klasörün ve onun alt klasörlerinin içindeki typescript dosyalarını derlemek istiyorsak o zaman şunları yaparız:

    1.) VS Code editöründe "My_New_Site" isimli klasöre sağ tık > "Open in İntegrated Terminal" seçeneğine tıklıyoruz ve böylece terminali ilgili klasörde konumlandırıyoruz. Ya da klasör yolunu dosya gezgininden kopyalıyoruz ve terminale cd 'dosya yolu' yazarak terminali klasörde konumlandırıyoruz.
    Örneğin "cd C:\Users\mrtgz\Documents\Calisma_Dosyalarim\My_New_Site"
    2.) Terminale "tsc --init" yazıp çalıştırırız ve "tsconfig.json" dosyasını oluştururuz.
    3.) "tsconfig.json" dosyasına girip , "outdir" : "" içine dosyaları çıkartmak istediğimiz klasörün yolunu yazıyoruz. Burada sadece klasörün ismini yazmamız yeterlidir çünkü biz "tsconfig.json" dosyasını genel çalışma klaöründe oluşturduk ve çalışma klasörünün alt klasörleri "tsconfig.json" dosyasıyla aynı konumda , aynı hizada bulunmaktadır. Bundan dolayı örneğin "My_New_Site" isimli genel klasörün içindeki "extracted_js_files" isimli klasöre typescript dosyaları derlensin istiyorsak, "tsconfig.json" dosyasının içine "outdir" : "extracted_js_files" yazarız. (Bu seçenek opsiyneldir, yapılmayabilir)
    4.) Terminale "tsc" yazıp çalıştırıyoruz ve böylelikle bu klasörün içinde bulunan tüm typescript dosyaları derleniyor.

**Önemli Uyarı:** Eğer bizim üzerinde çalıştığımız genel klasörün direkt içinde bir tsconfig.json dosyası varsa biz ister terminali genel klasörde konumlandırıp "tsc" komutunu çalıştıralım, istersek de o genel klasörün alt klasörüne terminali konumlandırıp "tsc" komutunu çalıştıralım farketmez, genel klasörde ve onun alt klasöründe bulunan bütün typescript dosyaları derlenir.


Eğer ki biz  terminali genel klasörün "ts_files" isimli alt klasöründe konumlandırıp sadece o alt klasördeki typescript dosyalarının derlenmesini istiyorsak şunları yaparız:  

    1.) Genel klasörde "tsconfig.json" dosyası olmadığından emin oluruz, varsa sileriz
    2.) VS Code editöründe "ts_files" isimli klasöre sağ tık > "Open in İntegrated Terminal" seçeneğine tıklıyoruz ve böylece terminali ilgili klasörde konumlandırıyoruz. Ya da klasör yolunu dosya gezgininden kopyalıyoruz ve terminale cd 'dosya yolu' yazarak terminali klasörde konumlandırıyoruz.
    Örneğin "cd C:\Users\mrtgz\Documents\Calisma_Dosyalarim\My_New_Site\ts_files"
    3.) "tsc --init" komutunu çalıştırırız ve o klasörün içinde de bir "tsconfig.json" dosyası oluşur. 
    4.) "tsconfig.json" dosyasına girip , "outdir" : "" içine dosyaları çıkartmak istediğimiz klasörün yolunu yazıyoruz. Lakin diyelim biz "My_New_Site" isimli genel klasörün altında "ts_files" isimli bir klasöre sahibiz ve sadece bu klasördeki typescript dosyalarının derlenmesini istiyoruz. Aynı zamanda bu klasördeki typescript dosyaları derlendiği zaman çıkartılacak javascript dosyalarının de genel klasör içindeki "extracted_js_files" isimli klasöre çıkarılmasını istiyoruz. O zaman "tsconfig.json" dosyasına "outdir" : "../extracted_js_files" yazmamız gerekir, buradaki ../ ifadesi "bir üst klasöre çık" demektir. Dolayısıyla biz "outdir" : "../extracted_js_files" yazdığımız zaman typescript'e şunu söylemiş oluyoruz : "bir üst klasöre çık ve oradaki 'extracted_js_files' isimli klasörü seç". (Bu seçenek opsiyneldir, yapılmayabilir)
    5.) Terminalde "tsc" komutunu çalıştırırız ve sadece o alt klasör içindeki typescript dosyaları derlenir.


<hr style= "border-bottom: 5px solid red;">

<br>

## Typescript'in Tüm Komutlarını Görmek 

    Typescrip'in  komutlarını ve onların açıklaması için komut satırına  "tsc --help" yazarız,
    Typescrip'in tüm komutlarını ve onların açıklaması için ise komut satırına "tsc --help --all" yazarız.

<hr style= "border-bottom: 5px solid red;">

<br>

## Modül Olmayan Typescript Sayfalarını Tek Bir Typescript veya Javascript Dosyasına Derlemek

    Not: "Modül Olmayan" ifadesinden kasıt "export, import, extends, implements" gibi komutlarla birbirine bağlanmamış ts sayfalarıdır, eğer  bu tür komutlarla javascript sayalarına birbirine bağımlı hale  getirmişsen bu birleştirip derleme işlemi gerçekleşmez . 

    tsc --out sonuc.js ortak.ts ogretmen.ts 
    
    Bu komut ise içerisinde modül olmayan, (yani içerisinde import , export işlemleri yapılmamış)  birden çok typscript dosyasını birleştirip tek bir javascript dosyası içine derlemeye yarar. Böylelikle farklı typescript dosyaları içinde bulunan bir çok bileşeni (fonksiyonlar, değişkenler, class'lar gibi) tek bir javascrit sayfasında birleştirmiş oluruz.

    Bu komuttaki "tsc" klasik derleme işlemi için, "-out" typescript dosyalarını birleştirip tek bir javascript dosyası olarak çıkartmak için kullanılır,  "-out" komutundan sonra yazdığımız "sonuc.js" ifadesi çıkartılacak javascript dosyasının adını belirtirken , "sonuc.js" ifadesinden sonra yazdığımız "ortak .ts ogretmen.ts" ifadesi ise hangi typescript dosyalarının birleştirilip derleneceğini belirtir, istenildiği kadar typescript dosyası yazılabilir. 


    tsc --out sonuc.ts ortak.ts ogretmen.ts 

    Bu komut ise aslında yukarıdaki komutun aynısıdır, sadece derlenen ve birleştirilen typescript sayfalarını  bir javscript dosyasına derlemez de , bir typescript dosyasına derler o kadar.

<hr style= "border-bottom: 5px solid yellow;">

<br>

## Webpack Kullanılarak Modül Olan Typescript Sayfalarının Tek JavaScript Dosyası Olarak Derlenmesi

<b>1.) Gerekli bağımlılıkları indirin:<br/>

    npm install webpack webpack-cli ts-loader typescript --save-dev

<b>2.) Aşağıdaki yapılandırma ile projenizin kök dizininde bir "tsconfig.json" dosyası oluşturun:</b>

    {
    "compilerOptions": {
        "target": "es5",
        "module": "es6",
        "outDir": "./dist",
        "rootDir": "./src",
        "sourceMap": true,
        "strict": true
    }
    }

Bu yapılandırma, çıktı dizinini "./dist" olarak ayarlar ve TypeScript modüllerinin ES6 modül biçiminde çıkarılacağını belirtir.


<b>3.) Aşağıdaki yapılandırma ile projenizin kök dizininde bir "webpack.config.js" dosyası oluşturun:</b>

    const path = require('path');

    module.exports = {
    entry: './src/index.ts',
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
        ]
    }
    };

    
Bu yapılandırma giriş noktasını "./src/index.ts" olarak ayarlar, çıktı dosya adını "bundle.js" olarak belirtir, çıktı dizinini "./dist" olarak ayarlar ve Webpack'e TypeScript ve JavaScript dosyalarını ".ts" ve ".js" uzantıları. Ayrıca Webpack'e *.ts veya *.tsx kalıbıyla eşleşen dosyalar için "ts-loader" kullanmasını söyler.

<b>4.) Projenizin "src" dizininde bir "index.ts" dosyası oluşturun. Bu dosya, uygulamanız için gerekli tüm modülleri ve bağımlılıkları içe aktarmalıdır.</b>

<b>5.) Webpack komutunu terminalinizde çalıştırın:</b>

    npx webpack --config webpack.config.js

Bu, tüm TypeScript modüllerini ve bağımlılıklarını "dist" dizininde bulunan tek bir JavaScript dosyasında derleyecektir.

Bu kadar! Artık tüm TypeScript modüllerinizi içeren, Webpack kullanılarak oluşturulmuş tek bir JavaScript dosyanız var.

<hr style= "border-bottom: 5px solid red;">

<br>

## Önemli Ekstralar : 

    node deneme1.js           // Bir javascript dosyasını komut satırında çalıştırır ve çıktısı gösterir.

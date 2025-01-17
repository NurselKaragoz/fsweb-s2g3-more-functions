// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

let text = "C:/Users/johnsmith/Music/Beethoven_5.mp3";

function dosyaAdiniBul() {
  let result = text.lastIndexOf("/");
  dosya = text.substring(result + 1);
  return dosya;
}
console.log(dosyaAdiniBul());

/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/
const dizi = [50, 26, 153, 7];
function toplamiBul(toplam, current) {
  return toplam + current;
}
const dizitoplam = dizi.reduce(toplamiBul);
function ortalamaBul(bölüm, bölen) {
  return bölüm / bölen;
}
console.log(ortalamaBul(dizitoplam, dizi.length));

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

const dizi1 = [50, 26, 153, 7, 45, 89, 68];
function toplamiBul(toplam, current) {
  return toplam + current;
}
const dizitoplam1 = dizi1.reduce(toplamiBul);
function ortalamaBul(bölüm, bölen) {
  return bölüm / bölen;
}
const result = ortalamaBul(dizitoplam1, dizi1.length);
// console.log(result);

function ortalamadanBuyukleriBul(value) {
  return value > result;
}
const sonuc = dizi1.filter(ortalamadanBuyukleriBul);
console.log(sonuc);

/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };

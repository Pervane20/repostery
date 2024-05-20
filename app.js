
// Bir kitabxana class -ı  yaradın. Kitab elave etmek, silmek, kitablara baxmaq, ve kitablarin sayini gormek olsun
// class Kitab {
//     constructor(ad, janr, il) {
//       this.ad = ad;
//       this.janr = janr;
//       this.il = il;
//     }
//   }
//   class Kitabxana {
//     constructor() {
//       this.kitablar = [];
//     }
  
//     kitabElaveEt(ad, yazici, janr, il) {
//       const kitab = new Kitab(ad, janr, il);
//       this.kitablar.push(kitab);
//     }
  
//     kitabSil(ad) {
//       this.kitablar = this.kitablar.filter(e => e.ad !== ad);
//     }
  
//     kitablaraBax() {
//       this.kitablar.forEach(k => {
//         console.log(`${k.ad} - (${k.janr}, ${k.il})`);
//       });
//     }
//     kitabSayiniGoster() {
//         console.log(`Kitabların sayı: ${this.kitablar.length}`);
//       }
//     }
    
    
//     let kitabxana = new Kitabxana();
//     kitabxana.kitabElaveEt("Riyaziyyat", "Riyazi meselelerin helli",2002);
//     kitabxana.kitabElaveEt("Informatika", "Modelesdirme",1990);
//     kitabxana.kitablaraBax();
    
//     kitabxana.kitabSil("1990");
//     kitabxana.kitablaraBax();
    
//     kitabxana.kitabSayiniGoster();
    



document.getElementById("validationForm").addEventListener("submit" ,function (e){
    e.preventDefault()
    try{
     form()
    }catch(error){
        console.log(error.message)
        showError(error.message)
    }
})
function form(){
    let soyad=document.querySelector("#usn").value
    console.log(soyad)
    let email=document.querySelector("#mail").value
    console.log(email)
    let shifre=document.querySelector("#psw").value
    console.log(shifre)
    let yenidenShifre=document.querySelector("#cpsw").value
    console.log(yenidenShifre)
   let cinsiyyet=document.querySelector("#cins").value
   console.log(cinsiyyet)
   if(soyad ===""){
    throw ReferenceError ("Soyad daxil edilmeyib")
}
if(email ===""){
    throw ReferenceError ("Email daxil edilmeyib")
}
if(shifre ===""){
    throw ReferenceError ("Shifre daxil edilmeyib")
}

if(yenidenShifre ===""){
    throw ReferenceError ("YenidenShifre daxil edilmeyib")
}
if(cinsiyyet ===""){
    throw ReferenceError ("Cinsiyyet daxil edilmeyib")
}
}
function showError(errorMessage){

    let error1=document.createElement("p")
    error1.innerHTML=errorMessage
    error1.className="error";
    document.querySelector("#divmain").innerHTML=""
document.querySelector("#divmain").append(error1)
}

